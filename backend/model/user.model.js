const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/test")


const userSchema=new mongoose.Schema({
    name:String,
    username:String,
    email:{
        type:String,
        unique:true
    },
    password:String
})

const user=mongoose.model("user",userSchema)

module.exports=user