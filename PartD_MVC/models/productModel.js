const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    pname:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        min:1,
        required:true
    },
    category:{
        type:String,
        enum:["electronics","fruits"],
        required:true
    },
    quantity:{
        type:Number,
        min:0,
        required:true
    }
})

const productModel =  mongoose.model("products",productSchema);

module.exports=productModel;