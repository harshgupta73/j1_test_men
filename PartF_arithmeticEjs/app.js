const express = require('express');

const app = express()
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("calculator")
})

app.post("/calculate",(req,res)=>{
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const operation = req.body.operation

    let result;

    switch (operation) {
        case "add":
            result=num1+num2
            break;
        
        case "sub":
            result=num1-num2
            break;

        case "mul":
            result=num1*num2
            break;
        
        case "div":
            result=num1/num2
            break;
        
        default:
            break;
    }

    res.render("calculator",{result})
})

app.listen(4000,()=>{
    console.log("running")
})
