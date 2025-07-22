const CallbackModel=require('../models/CallbackModel')

const callbackreq=async(req,res)=>{
    try {
            const { name, emailId, number, comment } = req.body;

         if (!name || !emailId || !number) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
        const newUser=new CallbackModel(req.body)
        const user=await newUser.save()
        res.status(200).json({success:true,message:"callback request saved",user})
        
    }
     catch (error) {
        res.status(500).json({success:false,message:"Failed to save callback request",error:error.message})
    }
     
}

module.exports=callbackreq;