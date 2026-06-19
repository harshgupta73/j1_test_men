const express = require('express');
const router = require('./routes/productRoutes');
const { connectDB } = require('./db');

const app = express()
connectDB()
app.use(express.json())
app.use("/",router)

app.listen(4000,()=>{
    console.log("running")
})