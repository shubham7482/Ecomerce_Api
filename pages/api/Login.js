import Mongo from "../../db/initial/Mongo";
import user from "../../db/schema/user";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
Mongo()
export default async(req,res)=>{
    const {email,password}=res.body
    try{
        if(!email,!password){
            return res.status(422).json({error:'please fill all the input'})

        }
        const jon =await user.findOne({email})
if(!jon){
    return res.status(404).json({error:"email is not found"})
}
const doMatch=await bcrypt.compare(password,user.password)
if(doMatch){
  const token=  jwt.sign({userId:user._id},process.env.JWT_SECRET,{
        expiresIn:"2d"
    })
    res.status(201).json({token})
}else{
    return res.status(402).json({error:"email and password do not match"})
}
    }catch(error){

    }
}