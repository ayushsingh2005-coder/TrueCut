// IN this file we'll receive the image from the frontend and we'll remove the bg of the image

// we'll use clipDrop tool API (Remove background)
// FormData is a built-in Web API (not a package) that allows you to construct key/value pairs representing form fields and their values. It's commonly used to send files and data to a server, especially for file uploads.

import axios from 'axios';
import fs from 'fs';
import FormData from 'form-data';
import userModel from '../models/userModel.js';

// controller function to remove the bg of the image
const removeBgImage = async(req,res) =>{

        try {

            // to get the image from the frontend to backend we'll use form Data built-n API
            // to pass the data into XPathExpression.js we'll use middleware(using multer package)
            const {clerkId} = req.body;

            const user  = await userModel.findOne({clerkId});
            if(!user){
                return res.json({success:false , message:'User not found'});

            }
            if(user.creditBalance === 0){
                return res.json({success:false , message: 'NO credit Balance',creditBalance:user.creditBalance});
            }

            const imagePath = req.file.path;



            //reading the image file 
            const imageFile = fs.createReadStream(imagePath); //now we have an image

            // now we have to create form data(go to documentation)

            const formdata = new FormData();
            formdata.append('image_file',imageFile );

            const {data} = await axios.post('https://clipdrop-api.co/remove-background/v1',formdata , {
                headers:{
                    'x-api-key':process.env.CLIPDROP_API,

                },
                responseType: 'arraybuffer'
            });

            // data variable contain the bg removed image --> send this to frontend as a response , so we create a base64 image

            const base64Image = Buffer.form(data,'binary').toString('base64');

            const resultImage = `data:${req.file.mimetype};base64,${base64Image}`

            
        } catch (error) {
            console.log(error.message);
            res.json({success:false , message:error.message});
            
        }

}

export {removeBgImage};