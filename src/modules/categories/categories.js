const categoryModel=require("./model")

const getAll = async(req,res)=>{
    try {
        let categories = await categoryModel.find()
    res.send({
        success:true,
        data:categories
    })
        
    } catch (error) {
        
    }
}


const create = async(req,res)=>{
    try {
        let {name}= req.body
    let category= await categories.create({name})
    category.save()
    res.send({
        success:true,
        data:category
    })
        
    } catch (error) {
        res.status(error.status || 403).send({
            success:false,
            message: error.message
        })
        
    }
}


const update=async(req,res)=>{
    const {name}=req.body
    const {id} = req.paramas


    const category=await categoryModel.findById(id)
    if (category) {
        category.name=name
        await category.save()
       let result= await categoryModel.findOneAndUpdate({_id},{name},{new:true,upsert:true})
       res.send({
        success:true,
        data:category
       })
        
    } else {
        res.status(404).send({
            success:false,
            message:"Id is incorrect"
        })
        
    }    
}

module.exports={
    getAll,
    create,
    update
}