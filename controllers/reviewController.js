const reviewModel = require("../models/reviewModel");


const postReview = async(req,res)=>{
    try{
        const name = "Rushikesh";
        const feedback = "Hi Suhani & Amisha, I just wanted to take a moment to thank you both for your incredible support throughout the hiring process. Everything went so smoothly, and I’m excited about my new role at Teleperformance. I’m looking forward to staying in touch."

        const newReview = new reviewModel({name,feedback});
        const saveUser = await newReview.save();
        res.status(202).json({success:true,message:"Review has been Creaated",data:saveUser});

    }catch(error){
        res.status(500).json({success:false,message:"Failed to create Review",error:error.message});
    }

} // End of postReview function


const getReview = async(req,res)=>{
    try{
        const allReviews = await reviewModel.find();
        res.status(200).json(allReviews);

    }catch(error){

        res.status(500).json({success:false,message:"Found 0 reviews",error:error});

        
    }

}

module.exports = {postReview,getReview};
