import mongoose from "mongoose";
// import { stringify } from "postcss";

const Userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        
    },
    password:{
        type:String,
        required:true,
        
    },
   
    role:{
        type:String,
        required:true,
        default:'user',
        enum:['user','admin','root']


    }

},{
    timestamps:true
})
export default mongoose.models.user||mongoose.model('user',Userschema )