import mongoose from 'mongoose';

const jobSchema=new mongoose.Schema({
    recruiter:{type:mongoose.Scheam.Types.ObjectId,ref:'User',required:true},
    title:{type:String,required:true},
    description:{type:String,required:true},
    skillsRequired:[String],
    isActive:{type:Boolean,default:true}
},{
    timestamps:true
});

const Job=mongoose.model('Job',jobSchema);
export default 'Job';