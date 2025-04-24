
const express=require('express');
const router=express.Router();

const postRegistrationData=require('../controllers/registrationController.js');


router.post('/register',postRegistrationData);


module.exports=router;