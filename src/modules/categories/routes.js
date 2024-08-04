const { Router } = require("express")
const { create } = require("./model")
const { getAll, update} = require("./categories")

const categoryRouter= Router()

categoryRouter.post("/create",create)
categoryRouter.get("/all",getAll)
categoryRouter.patch("update/:id",update)

module.exports=categoryRouter