
const registerModel=require('../models/registrationModel.js');


const postRegistrationData=async(req,res)=>{

  try {
    const user=new registerModel(req.body);
    const savedUser=await user.save();
    res.status(200).json({success:true,message:"User registered successfully",savedUser})
    
  } catch (error) {
    res.status(500).json({success:false,message:"User not registered successfully",error:error.message})

  }


}

module.exports=postRegistrationData;