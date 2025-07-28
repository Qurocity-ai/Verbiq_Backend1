const express = require("express");
const router = express.Router();
const {
  jobApplications,
  viewJobApplication,
} = require("../controllers/jobApplicationController");
const auth = require("../middlewares/auth");
const authRole = require("../middlewares/authRole");

router.post("/apply", auth, authRole("Candidate"), jobApplications);
router.get("/view/:jobId", auth, authRole("Company"), viewJobApplication);

module.exports = router;
