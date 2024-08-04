const monsoose = require("mongoose")

const mongo = async()=>{
    return await monsoose.connect("mongodb://localhost:27017/")

}

module.exports=mongo    