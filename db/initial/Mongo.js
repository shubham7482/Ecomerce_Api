import mongoose from "mongoose"
function Mongo(){
    if(mongoose.connections[0].readyState){
console.log("already connect")
return
    }
    mongoose.connection(process.env.Mongo_URI,{
        useNewUrlParser:true
    })
  mongoose.connection.on("connected",()=>{
      console.log("connected sucess..")
  })
  mongoose.connection.on('error',(err)=>{
      console.log("error connecting",err)
  })
  
}
export default Mongo
