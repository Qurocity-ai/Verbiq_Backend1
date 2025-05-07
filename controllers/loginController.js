
const registrationModel=require('../models/registrationModel');
// const CompanyModel = require("../models/CompanyModel");
const CandidateModel = require("../models/CandidateModel");
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');



const loginPage=async(req,res)=>{
     try {
        const{emailId,password}=req.body;

        const user=await CandidateModel.findOne({emailId:emailId});
        
        if(!user){
          return res.status(404).json({success:false,message:"User not found"});
        }
      
        const isPasswordMatch=await bcrypt.compare(password,user.password);

        if(!isPasswordMatch){
          return res.status(401).json({success:false,message:"Wrong credential"});
        }   


       //before deploy move this to .env

        const token = jwt.sign(
          { id: user.id, email: user.emailId ,role:user.role}, // payload
         process.env.SECRET_KEY,
          { expiresIn: '7d' } // token expiry
        );
     
        return res.status(200).json({
          success:true,
          message: 'Login successful',
          token: token,
          role:user.role,
          emailId:user.emailId
        });
        
        
     } 
     catch (error) {
      res.status(500).json({success:false,message:"Login failed",error:error.message})

     }
}

  module.exports=loginPage;