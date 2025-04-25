
const registerModel=require('../models/registrationModel.js');
const bcrypt=require('bcryptjs')


const postRegistrationData=async(req,res)=>{

  const {password,confirmPassword}=req.body;
  try{
    
    if(password!==confirmPassword)
    {
    return res.status(400).json({message:"password do not match"});
 
  }
    const hashPassword=await bcrypt.hash(req.body.password,5);
    const user=new registerModel({...req.body,password:hashPassword});
    const savedUser=await user.save();
    res.status(200).json({success:true,message:"User registered successfully",savedUser});
   
  } catch (error) {
    res.status(500).json({success:false,message:"User not registered successfully",error:error.message})
 
  }
}




const getRegistrationData = async(req,res)=>{
  try{
    const users = await registerModel.find();
   res.status(200).json(users);

  }catch(error){

    res.status(500).json({success:false,message:"Data not shown",error:error.message})

  }
  

}

module.exports = {postRegistrationData,getRegistrationData};