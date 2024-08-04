const { Router } = require("express")
const { create } = require("./movies")
const { getAll, update} = require("./categories")

const movieRouter= Router()

movieRouter.post("/create",create)
movieRouter.get("/all",getAll)
movieRouter.patch("update/:id",update)

module.exports=movieRouter