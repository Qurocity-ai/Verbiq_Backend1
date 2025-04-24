
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



const getRegistrationData = async(req,res)=>{
  try{
    const users = await registerModel.find();
   res.status(200).json(users);

  }catch(error){

    res.status(500).json({success:false,message:"Data not shown",error:error.message})

  }
  

}

module.exports = {postRegistrationData,getRegistrationData};