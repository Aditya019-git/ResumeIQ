import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,rquired:true,unique:true},
    role:{type:String,enum:['candidate','recruiter','admin'],default:'candidate'}
},{
    timestamps:true //automatically adds createdAt and updatedAt dates
}
);

const User=mongoose.model('User',userSchema);
export default User;