import { Webhook } from "svix"
import userModel from "../models/userModel.js";


// API controller function to manage clerk user with database
// we need a public IP to work with clerk webhook ,vercel will give us domain which we use it as public IP
// http://localhost:4000/api/user/webhooks

const clerkWebhooks = async(req,res) =>{
     console.log("Webhook received:", req.body.type); 

    try {
        // create a Svix instane with clerk webhook secret
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        // now we have to verify the header using the above whook -- go to the testing section on the platform
        // whenever a new user is created we'll get data in the body of the req from that we use some specific meta-data to verify the webhook event(like user.created)
        await whook.verify(JSON.stringify(req.body) ,{
            "svix-id" :req.headers["svix-id"],
            "svix-timestamp":req.headers["svix-timestamp"],
            "svix-signature":req.headers["svix-signature"]
        })
        // if we don't have any errors -> whook event is correct,in that case ,we'll check the type of event
        const {data , type} = req.body;

        switch (type) {
            case "user.created":{

                const userData  = {
                    clerkId:data.id,
                    email:data.email_addresses[0].email_address,
                    firstName:data.first_name,
                    lastName:data.last_name,
                    photo:data.image_url
                }

                await userModel.create(userData);
                res.json({});
                break;
            }
            case "user.updated":{
                const userData  = {
                    email:data.email_addresses[0].email_address,
                    firstName:data.first_name,
                    lastName:data.last_name,
                    photo:data.image_url
                }

                await userModel.findOneAndUpdate({clerkId:data.id},userData)
                res.json({});

                break;
            }
            case "user.deleted":{

                await userModel.findOneAndDelete({clerkId:data.id})
                res.json({});

                break;
            }
                
            default:
                break;
        }

        
    } catch (error) {
        console.log(error);
        console.log(error.message);
        res.status(500).json({success:false , message:error.message});
    }

}

export {clerkWebhooks};