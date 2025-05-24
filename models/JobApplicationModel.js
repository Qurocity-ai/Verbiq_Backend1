const mongoose=require('mongoose')

const applicationSchema=new mongoose.Schema({
    name:{type:String,required:true},
    emailId:{type:String,required:true},
    number:{type:String,required:true,match: /^[0-9]{10}$/,},
language: {
  type: [String],
  required: true,
},
    cv: {
  type: String,
  required: true,
},
    experience:{type:Number,required:true},
    summary:String,
jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "JobPostModel", // This is important for populate
    required: true,
  },
},
 {
  timestamps: true,
}
)

const JobApplicationModel=mongoose.model('jobApplication',applicationSchema)

module.exports=JobApplicationModel