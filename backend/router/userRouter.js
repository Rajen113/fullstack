const express = require("express");
const router = express.Router();
const user= require("../model/user.model") // Correctly create a router instance

router.get("/register", (req, res) => {
    res.render("index");
});

router.get("/",async(req,res)=>{
    const users= await user.find()
    console.log(users)
    res.json(users)
})

router.post("/signup", async (req,res)=>{
    const {name,username,email,password}=req.body
    const createUser=await user.create({
        name:name,
        username:username,
        email:email,
        password:password
    })
    console.log(createUser)

    res.send(createUser)
})

module.exports = router; // Directly export the router instance
