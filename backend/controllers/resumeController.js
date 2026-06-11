import Resume from '../models/Resume.js';

export const uploadResume=async(req,res)=>{
    try{

        if(!req.file){
            return res.status(400).json({message:"Please Upload a file"});
        }

        const resume=await Resume.create({

            user:req.user._id,
            filePath:req.file.path,
        });

        res.status(201).json({
            message:"Resume uploaded successfully",
            resume
        });
    }catch(error){
        res.status(500).json({message:error.message});
    }
};