'use strict'


const express= require('express');
const CompraController= require('../controllers/compra');

const router= express.Router();

router.post('/compras',CompraController.getCompras);

module.exports=router;