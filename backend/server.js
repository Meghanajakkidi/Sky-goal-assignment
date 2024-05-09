const express = require("express")
const app = express()
app.use(express.json())
const cors =require("cors")
app.use(cors())
const mongoose = require("mongoose")

const authroutes = require("./routes/Auth")
app.use("/auth",authroutes)
mongoose.connect("mongodb://localhost:27017/users");
app.listen(7000,()=>{
    console.log("server is running on port 7000")
})