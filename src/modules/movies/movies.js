
let movieModel=require("./model")
let categoryModel=require("../categories/model")
const create= async(req,res)=>{
    let {name,category_id }=req.body
    const category=await categoryModel.findOne({_id:category_id})
    let movie = await movieModel.create({name, category})


    res.send({
        success:true,
        data:movie
    })
}


module.exports={
    create
}