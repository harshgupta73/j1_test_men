const express = require('express');
const { showProd, insertProd, updateProd, deleteProd, showProdById } = require('../controllers/productController');

const router = express.Router()

router.get("/",showProd)
router.get("/search/:id",showProdById)
router.post("/insertProd",insertProd)
router.patch("/updateProd/:id",updateProd)
router.delete("/deleteProd/:id",deleteProd)

module.exports=router;