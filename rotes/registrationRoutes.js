
const express=require('express');
const router=express.Router();

const {postRegistrationData,getRegistrationData}=require('../controllers/registrationController.js');


router.post('/postRegister',postRegistrationData);
router.get('/getRegister',getRegistrationData);


module.exports=router;