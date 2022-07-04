import Mongo from "./../../db/initial/Mongo"
import user from "./../../db/schema/user"
import bcrypt from 'bcrypt'
Mongo()
export default async (req,res)=>{
    const {name,email,phone,password}=req.body
try{
    if(!name,!email,!phone,!password){
return res.status(422).json({error:"please fill all the input"})
    }
    const jon=await user.findOne({email})
    if(jon){
        return res.status(422).json({error:"email already exist"})
    }
    const hashedPassword=await bcrypt.hash(password,12)
   const newUser= await new user({
        name,
        email,
         phone,
         password:hashedPassword

    }).save()
    console.log(newUser)
    res.status(201).json({massage:'Signup sucess' })
}catch(error){
    console.log(error)
}
}
