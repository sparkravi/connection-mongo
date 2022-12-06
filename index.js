const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const port=5000

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())
app.use(cors())
mongoose.connect("mongodb+srv://ravindranaik:Kiran356@cluster0.zcugf9v.mongodb.net/fristdb?retryWrites=true&w=majority")
.then(()=>{
    console.log("connection established")
})
.catch((err)=>{
    console.log(err)
})
app.get("/",(req,res)=>{
    res.send("dummy route running")
})

app.listen(port,()=>console.log("server is running now on 5000 port"))