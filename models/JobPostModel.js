const mongoose = require('mongoose');


const JobPostSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  languages: [{ type: String, required: true }],
  duration: { type: String, required: true },
  tags:[{type:String,required:true}],
  price: { type: String, required: true },
  companyName: { type: String, required: true },
  jobDescription: { type: String, required: true },
  emailId: { type: String, required: true },
  employmentType: [{type:String,required:true}],
  experienceLevel: [{type:String,required:true}],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    
    required: true
  },
  postedAt: { type: Date, default: Date.now }
});


const JobPostModel = mongoose.model('JobPost', JobPostSchema);


module.exports = JobPostModel;
