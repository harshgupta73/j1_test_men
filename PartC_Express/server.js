const express = require('express');
const path = require('path');
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","home.html"))
})

app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","about.html"))
})

app.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","contact.html"))
})

app.get("/add",(req,res)=>{
    const a = 10+10;
    res.json(a)
})

app.post("/form",(req,res)=>{
    const data = req.body
    res.json(data)
})

app.listen(4000,()=>{
    console.log("running")
})

