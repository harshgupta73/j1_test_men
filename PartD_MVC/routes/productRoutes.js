const express = require('express');
const { showProd, insertProd, updateProd, deleteProd } = require('../controllers/productController');

const router = express.Router()

router.get("/",showProd)
router.post("/insertProd",insertProd)
router.patch("/updateProd/:id",updateProd)
router.delete("/deleteProd/:id",deleteProd)

module.exports=router;