const express=require('express');
const callbackreq = require('../controllers/callbackController');
const router=express.Router();

router.post("/callback",callbackreq);
 
module.exports=router;