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
            
        } catch (error) {
            console.log(error.message);
            res.json({success:false , message:error.message});
            
        }

}

export {removeBgImage};