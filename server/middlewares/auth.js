import jwt from 'jsonwebtoken'

// Middleware Function to decode jwt token to get clerkId(we're using this middleware because we're in development mode){for production mode : use express-clerk middleware}

const authUser = async (req,res,next) =>{

    try {

        const {token} = req.headers 

        if(!token){
            return res.json({success:false , message:'Not authorized Login Again'})
        }
        
        const token_decode = jwt.decode(token)


        if (!token_decode || !token_decode.clerkId) {
            return res.json({ success: false, message: 'Invalid token' })
        }
        req.userId = token_decode.clerkId;
        next();

    } catch (error) {
        console.log(error);
        res.status(500).json({success:false , message:error.message});
        
    }
}

export default authUser;

// go to the session section on the clerk platform and add in the claims section {}

// "clerkId":"{{user.id}}"

// whenever a session token is created we'll get a clerkId