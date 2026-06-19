const mongoose = require('mongoose');
const { connectDB } = require('./db');

const studentSchema = mongoose.Schema({
    rollno:{
        type:Number,
        unique:true,
        required:true
    },
    name:{
        type:String,
        lowercase:true,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    course:{
        type:String,
        enum:["IT","Sales","HR","Acct"],
        required:true
    }
})

const studentModel =  mongoose.model("students",studentSchema);



connectDB()

const displayEmp= async (req,res)=>{
    try {
        const data = await studentModel.find()
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}

displayEmp();

const insertEmp= async (req,res)=>{
    try {
        const data = new studentModel({
            rollno:1,
            name:"Harsh",
            email:"harsh@gmail.com",
            course:"IT"
        })
        const result = await data.save()
        console.log(result);
    } catch (error) {
        console.log(error)
    }
}

//insertEmp()

const updateEmp= async (req,res)=>{
    try {
        const data = await studentModel.updateOne({name:"harsh"},{course:"HR"})
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}

//updateEmp()

const deleteEmp= async (req,res)=>{
    try {
        const data = await studentModel.deleteOne({name:"harsh"})
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}

//deleteEmp()