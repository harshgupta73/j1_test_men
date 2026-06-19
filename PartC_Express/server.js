const express = require('express');
const path = require('path');
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    
})

app.get("/add",(req,res)=>{
    const a = 10+10;
    res.sendFile(path.join(__dirname,"views","about.html"))
    res.json(a)
})

app.post("/form",(req,res)=>{
    res.json()
})

app.listen(4000,()=>{
    console.log("running")
})

