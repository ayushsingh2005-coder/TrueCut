
import multer from "multer";

// creating multer middleware for parsing formData

// disk storage configuration
const storage = multer.diskStorage({
    filename: function(re,file,callback){
        // callback(null , a new filename to our file)
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage});

export default upload;