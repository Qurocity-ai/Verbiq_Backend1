const JobPostModel=require('../models/JobPostModel')



const filterByPrice=async(req,res)=>{
    try {
         const ranges =req.body;

      if(!Array.isArray(ranges)|| !ranges.length===0){
      return res.status(400).json({success:false,message:"price range is not provided"})
      }
      const salaryQuery=ranges.map(r=>({
        price:{$gte:r.min,$lte:r.max}
      }))
      const jobs=await JobPostModel.find({$or:salaryQuery});
      res.status(200).json(jobs)
    } 
    catch (error) {
        res.status(500).json({success:false,message:"Error while filtring job by price",error:error.message})
    }
     
}

module.exports={filterByPrice}