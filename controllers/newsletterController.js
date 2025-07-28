const NewsLetterModel = require("../models/NewsletterModel.js");

const getAllNewsletters = async (req, res) => {
  try {
    const newsletters = await NewsLetterModel.find();
    res.status(200).json(newsletters);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching newsletters",
      error: error.message,
    });
  }
};

const createNewsletter = async (req, res) => {
  try {
    const newNewsletter = new NewsLetterModel(req.body);
    await newNewsletter.save();
    res.status(201).json({ success: true, data: newNewsletter });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating newsletter",
      error: error.message,
    });
  }
};

const getNewslettersById = async (req, res) => {
  try {
    const newsletter = await NewsLetterModel.findById(req.params.id);
    if (!newsletter) {
      return res
        .status(404)
        .json({ success: false, message: "Newsletter not found" });
    }
    res.status(200).json(newsletter);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching newsletters",
      error: error.message,
    });
  }
};

module.exports = {
  getAllNewsletters,
  createNewsletter,
  getNewslettersById,
};
