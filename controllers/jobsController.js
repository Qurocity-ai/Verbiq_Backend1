
const jobPostModel=require('../models/JobPostModel')


const jobPosts=async(req,res)=>{
  try {
    const user=new jobPostModel(req.body);
    const saveUser=await user.save();
    res.status(200).json({success:true,message:"Job post created successfully",saveUser})

  }
   catch (error) {
    res.status(500).json({success:false,message:"Error while creating job post",error:error.message})
  }

}

 const getJobPosts=async(req,res)=>{
    try {
        const allPosts=await jobPostModel.find();
        res.status(200).json({allPosts})
    } 
    catch (error) {
        res.status(500).json({success:false,message:"Error while fetching jobposts",error:error.message})

    }
 }

 const updateJobPosts=async (req,res)=>{
    try {
        const updatedJob=await jobPostModel.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        res.status(200).json({success:true,message:"Job post updated successfully",updatedJob});
    } 
    catch (error) {
        res.status(500).json({success:false,message:"Error while updating jobposts",error:error.message})

    }
 }

 const deleteJobPosts=async(req,res)=>{
    try {
        const deletedJob=await jobPostModel.findByIdAndDelete(req.params.id)
        res.status(200).json({success:true,message:"Job post deleted successfully",deletedJob});
    } 
    catch (error) {
        res.status(500).json({success:false,message:"Error while deleting jobpost",error:error.message})

    }
 }

  module.exports={jobPosts,getJobPosts,updateJobPosts,deleteJobPosts};