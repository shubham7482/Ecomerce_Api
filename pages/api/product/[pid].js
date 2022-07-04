import proschema from "../../../db/schema/proschema"
export default async (req,res)=>{
    const {pid}=req.query
const product= await proschema.findOne({_id:pid})
res.status(200).json(product)
}
