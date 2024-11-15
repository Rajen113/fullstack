const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const user= require("../model/user.model") // Correctly create a router instance

router.get("/register", (req, res) => {
    res.render("index");
});

router.get("/",async(req,res)=>{
    const users= await user.find()
    console.log(users)
    res.json(users)
})

router.post("/signup", async (req, res) => {
    const { name, username, email, password } = req.body;
  
    // Validate input
    if (!name || !username || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }
  
    try {
      // Check if the email or username already exists
      const existingUser = await user.findOne({ $or: [{ email }, { username }] });
      if (existingUser) {
        return res.status(409).json({ message: "Email or username already exists." });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create the user
      const newUser = await user.create({
        name,
        username,
        email,
        password: hashedPassword,
      });
  
      // Send success response without the password
      const { password: _, ...userWithoutPassword } = newUser.toObject();
      res.status(201).json(userWithoutPassword);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Internal server error." });
    }
  });

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const findUser = await user.findOne({ email: email });

        if (!findUser) {
            console.log("Login failed: User not found");
            return res.status(404).send("Login failed: User not found");
        }

        // Add password verification logic here if necessary
        // e.g., bcrypt.compare(password, findUser.password)

        console.log("Login successful:", findUser);
        res.status(200).send("Login successful");
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("Internal server error");
    }
});

module.exports = router; // Directly export the router instance
