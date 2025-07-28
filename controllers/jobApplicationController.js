const JobApplicationModel = require("../models/JobApplicationModel");
const JobPostModel = require("../models/JobPostModel");

const jobApplications = async (req, res) => {
  try {
    const application = new JobApplicationModel(req.body);
    const savedApplication = await application.save();
    res.status(200).json({
      success: true,
      message: "Successfully applied for the job",
      savedApplication,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while applying for the job",
      error: error.message,
    });
  }
};

const viewJobApplication = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    const userId = req.user.id;

    // 1. Find the job post
    const job = await JobPostModel.findById(jobId);
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    // 2. Check if the logged-in user is the creator of the job
    if (job.createdBy.toString() !== userId.toString()) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    // 3. Fetch applications for this job
    const candidates = await JobApplicationModel.find({ jobId });
    res.status(200).json({ candidates });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Error while fetching candidate details",
        error: error.message,
      });
  }
};

module.exports = { jobApplications, viewJobApplication };
