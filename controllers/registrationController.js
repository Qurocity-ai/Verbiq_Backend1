
const registerModel=require('../models/registrationModel.js');
const CandidateModel =require('../models/CandidateModel.js');
// const CompanyModel = require('../models/CompanyModel');

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

const postCandidateregistration = async(req,res)=>{
  try{

     const { emailId, role, password } = req.body;

   
    const existingUser = await CandidateModel.findOne({ emailId });

     if (existingUser) {
      if (existingUser.role !== role) {
        
        return res.status(400).json({
          success: false,
          message: `Email is already registered with role: ${existingUser.role}`,
        });
      } else {
        
        return res.status(400).json({
          success: false,
          message: "User already registered. Please proceed to login.",
        });
      }
    }


    const hashpassword =await bcrypt.hash(password,5);

    const user =await CandidateModel.create({...req.body,password:hashpassword});
    const newUser =await user.save();

    res.status(200).json({success:true,message:"Candidate data saved",newUser});

  }catch(error){
    res.status(400).json({success:false,message:"Data not registered",error:error.message});
  }

}

const getCandidateRegistration = async(req,res)=>{

  try{

    const users =await CandidateModel.find();
    res.status(200).json({success:true,users});

  }catch(err){
    res.status(400).json({success:false,message:"Candidate data not found"});
  }

}



// const postCompanyRegistration = async(req,res)=>{
//   try{

//     const {Companyname, emailId, password,name,Designation} = req.body


//     const hashpassword =await bcrypt.hash(password,5);

//     const Companyuser =await CompanyModel.create({Companyname,emailId,password:hashpassword,name,Designation});
//     const newUser = Companyuser.save();

//     res.status(200).json({success:true,message:"Candidate data saved",newUser});

//   }catch(error){
//     res.status(400).json({success:false,message:"Data not registered",error:error.message});
//   }

// }


// const getCompanyRegistration = async(req,res)=>{

//   try{

//     const Companyusers =await CompanyModel.find();
//     res.status(200).json({success:true,Companyusers});

//   }catch(err){
//     res.status(400).json({success:false,message:"Candidate data not found"});
//   }

// }



module.exports = {postRegistrationData,getRegistrationData,postCandidateregistration,getCandidateRegistration};