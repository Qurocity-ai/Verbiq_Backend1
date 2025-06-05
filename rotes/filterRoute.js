
const express=require('express')
const router=express.Router();
const {filterByPrice}=require('../controllers/filterController')
const auth=require('../middlewares/auth')

router.get('/price',auth,filterByPrice);

module.exports=router;