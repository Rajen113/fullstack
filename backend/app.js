const express=require("express")
const cors = require('cors')
const user=require("./model/user.model")
const app=express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.set("view engine","ejs")
const users=[]
console.log(users)
const jokes = [
    { category: "general", joke: "Why don’t scientists trust atoms? Because they make up everything!" },
    { category: "general", joke: "I told my wife she was drawing her eyebrows too high. She looked surprised." },
    { category: "general", joke: "I threw a boomerang years ago. Now I live in constant fear." },
    { category: "general", joke: "Why did the scarecrow win an award? Because he was outstanding in his field!" },
    
    { category: "programming", joke: "Why do programmers prefer dark mode? Because light attracts bugs!" },
    { category: "programming", joke: "How many programmers does it take to change a light bulb? None, that’s a hardware problem." },
    { category: "programming", joke: "Why do Java developers wear glasses? Because they don't see sharp." },
    { category: "programming", joke: "There are 10 types of people in the world: those who understand binary, and those who don’t." },
    
    { category: "puns", joke: "I’m reading a book on anti-gravity. It’s impossible to put down!" },
    { category: "puns", joke: "Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them." },
    { category: "puns", joke: "I used to play piano by ear, but now I use my hands." },
    { category: "puns", joke: "I'm on a seafood diet. I see food and I eat it." },
    
    { category: "animals", joke: "What do you call a fish wearing a bowtie? Sofishticated." },
    { category: "animals", joke: "Why did the math book look sad? Because it had too many problems." },
    { category: "animals", joke: "How does a penguin build its house? Igloos it together." },
    { category: "animals", joke: "What’s orange and sounds like a parrot? A carrot!" }
];


app.get("/",(req,res)=>{
    res.send("done done")
})
app.get("/register",(req,res)=>{
    res.render("index")
})

app.get("/user",async(req,res)=>{
    const users= await user.find()
    console.log(users)
    res.json(users)
})
app.post("/user", async (req,res)=>{
    const {name,username,email,password}=req.body
    const createUser=await user.create({
        name:name,
        username:username,
        email:email,
        password:password
    })
    console.log(createUser)

    console.log(users)
    res.send(createUser)
})

app.get("/api/jokes",(req,res)=>{

    res.json(jokes)
})


app.listen(3000)