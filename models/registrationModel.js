
const mongoose=require('mongoose');

const regSchema=new mongoose.Schema({
    fullName: { type: String, required: true },
  contactNumber: { type: String, required: true },
  emailId: { type: String, required: true, unique: true },
  location: { type: String, required: true },
  currentCTC: { type: Number, required: true },
  linkToPortfolio: String,
  nativeLanguages: [
    {
        nativeLanguage: String,
        proficiencyNative: String,
        certifications:String,
    }
  ],
  foreignLanguages: [
    {
      foreignLanguage: {type:String,required:true},
      proficiency: {type:String,required:true},
      certifications: String
    }
  ],



  roles: {
    interpretation: Boolean,
    translation: Boolean,
    contentRoles: Boolean,
    aiModelTraining: Boolean,
    customerSupportRoles: Boolean
  },

  workExperience: String,

  languageCertifications: [String],
  preferredLocations: [String],
  preferredProcesses: [String],
  assessments: {
    amcatORsvar: Boolean,
    versant: Boolean,
    berlitz: Boolean,
    pipplet: Boolean
  },
  aiModelAreas: {
    contentRating: Boolean,
    contentModeration: Boolean,
    dataAnnotation: Boolean,
    promptResponseTraining: Boolean,
    promptEvaluationAnalyst: Boolean
  },
  weeklyCommitmentHours: Number,
  chargesPerHour: Number
}, {
  timestamps: true
})


const registerModel=mongoose.model('registration',regSchema);

module.exports=registerModel;