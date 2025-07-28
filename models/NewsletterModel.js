const mongoose = require("mongoose");

const NewsLetterSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: [
    {
      type: {
        type: String, // e.g., 'text', 'number', 'image', etc.
        required: true,
      },
      value: {
        type: mongoose.Schema.Types.Mixed, // can be string, number, etc.
        required: true,
      },
      // Add more fields as needed
    },
  ],
  imageUrl: { type: String, required: true },
  imageUrl2: { type: String, default: "" },
  date: { type: String, required: true },
  views: { type: Number, default: 0 },
});

const NewsLetterModel = mongoose.model("NewsLetter", NewsLetterSchema);

module.exports = NewsLetterModel;
