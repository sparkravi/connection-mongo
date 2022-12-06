const mongoose=require("mongoose")
const newUserschema={
	username:String,
	password:String,
}
const Register=mongoose.model("student",newUsername)
module.express=Register