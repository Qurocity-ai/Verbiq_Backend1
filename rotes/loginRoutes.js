
const loginPage=require('../controllers/loginController.js');
const express=require('express');
const router=express.Router();


router.post('/userLogin',loginPage);


module.exports=router;