const mongoose=require("mongoose")
require('dotenv').config()

const databaseConnection= async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("database conneted")
    } catch (error) {
        console.log(error)
    }
}

databaseConnection()


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