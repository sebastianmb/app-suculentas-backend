const express= require('express');
const SignatureController= require('../controllers/signature');

const router= express.Router();


router.get('/generate-hashs',SignatureController.getSignature);

module.exports=router;