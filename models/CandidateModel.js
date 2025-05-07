const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["Company", "Candidate"],
    required: true,
  },
  fullname: { type: String },
  emailId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contactNumber: String,
  skills: String,
  experience: String,
  education: String,
  companyName: String,
  contactPersonName: String,
  Designation: String,
});

const CandidateModel = mongoose.model("candidate", CandidateSchema);

module.exports = CandidateModel;
