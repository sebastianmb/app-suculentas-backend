'use strict'


const express= require('express');
const ProductController= require('../controllers/product');

const router= express.Router();

router.get('/products',ProductController.getProducts);
router.get('/pot',ProductController.getPot);
router.post('/compras',ProductController.getCompras)

module.exports=router;