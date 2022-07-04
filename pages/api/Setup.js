// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Mongo from "../../db/initial/Mongo"
import proschema from "../../db/schema/proschema"
Mongo()
export default (req,res)=>{
  proschema.find().then(Setup=>{
res.status(200).json(Setup)
  })
}