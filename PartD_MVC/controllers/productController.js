const productModel = require("../models/productModel")

const insertProd= async (req,res)=>{
    try {
        const data = new productModel({
            pname:req.body.pname,
            price:req.body.price,
            category:req.body.category,
            quantity:req.body.quantity
        })
        const result = await data.save()
    } catch (error) {
        console.log(error)
    }
}

const updateProd= async (req,res)=>{
    try {
        const result = await productModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}

const deleteProd= async (req,res)=>{
    try {
        const result = await productModel.findByIdAndDelete(req.params.id)
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}

const showProd= async (req,res)=>{
    try {
        const result = await productModel.findById(req.params.id)
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}

module.exports={insertProd,updateProd,deleteProd,showProd}