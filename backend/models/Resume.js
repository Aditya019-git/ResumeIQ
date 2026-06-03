import mongoose from 'mongoose';
const resumeSchema=new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    filePath:{type:String,required:true},
    parsedData:{
        skills:[String],
        experience:[String],
        education:[String]

    },
    atsScore:{type:Number,default:0}
},{
    timestamps:true
});

const Resume=mongoose.model('Resume',resumeSchema);
export default Resume;