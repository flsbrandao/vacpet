import multer  from "multer";
import path from 'path';

export default multer.diskStorage({
    destination: (req,res,cb) => {
        cb(null, "uploads/");
    },
    filename: (req,file,cb) => {
        console.log(file,'opa')
        cb(null, file.originalname + Date.now() + path.extname(file.originalname))
    }
});