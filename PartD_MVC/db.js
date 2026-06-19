const mongoose = require('mongoose');

const connectDB=()=>{
    mongoose.connect("mongodb://localhost:27017/j1_test_mvc")
    .then(() => {
        console.log("connected")
    }).catch((err) => {
        console.log(err)
    });
}

module.exports={connectDB}