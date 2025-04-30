
const registerModel=require('../models/registrationModel.js');
const bcrypt=require('bcryptjs')
const nodemailer=require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // replace
    pass: process.env.EMAIL_PASS           // replace
  }
});


const postRegistrationData=async(req,res)=>{
  const {emailId}=req.body;
  // const {password,confirmPassword}=req.body;
   try{
    
  //   if(password!==confirmPassword)
  //   {
  //   return res.status(400).json({message:"password do not match"});
 
  // }
  //   const hashPassword=await bcrypt.hash(req.body.password,5);
     const user=new registerModel(req.body);
     const savedUser=await user.save();
    
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: emailId,
      subject: 'Welcome to VerbiQ ,Your Career Journey Begins Here',
      text: `Thank you for registering with us.Our team will connect with you shortly with relevant job opportunities.We soon plan to launch a portal where you can access the job listings through VerbiQ.
Stay tuned on LinkedIn for updates.`},savedUser);
    res.status(200).json({success:true,message:"Thank you for registering with us.Our team will connect with you shortly with relevant job opportunities.We soon plan to launch a portal where you can access the job listings through VerbiQ.Stay tuned on LinkedIn for updates.",savedUser});
   
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