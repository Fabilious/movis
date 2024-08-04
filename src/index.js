const express=require("express")
const mongo = require("./config/mongo")
const router = require("./routes")

const app=express()
mongo().then(()=> console.log("connected")
).catch((err)=>console.log(err)
)
app.use(express.json())
app.use(router)
app.listen(8000,()=>{console.log(8000);
})
