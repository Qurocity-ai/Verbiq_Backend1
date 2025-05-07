
const express=require('express');
const router=express.Router();

const {postRegistrationData,getRegistrationData,postCandidateregistration,getCandidateRegistration,postCompanyRegistration,getCompanyRegistration}=require('../controllers/registrationController.js');


router.post('/postRegister',postRegistrationData);
router.get('/getRegister',getRegistrationData);

router.post('/candidateRegister',postCandidateregistration);
router.get('/candidate',getCandidateRegistration);

// router.post('/postCompanyRegistration',postCompanyRegistration);
// router.get('/company',getCompanyRegistration);



module.exports=router;