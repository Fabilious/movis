const { Router } = require("express")
const categoryRouter=require("../modules/categories/routes")

const router= Router()

router.use("/categories",categoryRouter)

module.exports=router