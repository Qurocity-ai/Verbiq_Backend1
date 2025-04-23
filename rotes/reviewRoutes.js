const express = require("express");
const router = express.Router();
const { getReview,postReview } = require("../controllers/reviewController.js");

router.post("/postfeedback",postReview);
router.get("/getfeedback",getReview);

module.exports = router;

