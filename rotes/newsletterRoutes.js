const express = require("express");
const router = express.Router();
const {
  createNewsletter,
  getAllNewsletters,
  getNewslettersById,
} = require("../controllers/newsletterController");

router.post("/createNewsletter", createNewsletter);
router.get("/getAllNewsletters", getAllNewsletters);
router.get("/getNewslettersById/:id", getNewslettersById);

module.exports = router;
