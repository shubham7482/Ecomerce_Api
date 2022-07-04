import mongoose from "mongoose";
const proschema=new mongoose.Schema({
    name:{
        type:"string",
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discription:{
        type:"string",
        required:true
    },
    mediaUrl:{
        type:"string",
        required:true
    },
})
export default mongoose.models.product||mongoose.model('product',proschema)