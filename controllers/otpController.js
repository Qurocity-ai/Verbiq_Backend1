const registrationModel = require('../models/registrationModel');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');


// Nodemailer setup (dummy)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // replace
    pass: process.env.EMAIL_PASS           // replace
  }
});

// 🔹 Send OTP
exports.sendOtp = async (req, res) => {
  try {
    const { emailId } = req.body;

    const user = await registrationModel.findOne({ emailId });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6 digit OTP
    const otpExpires = new Date(Date.now() +  2* 60 * 1000); // 10 minutes

    user.otp = otp;
    user.otpExpires = otpExpires;
    await user.save();

    // send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: emailId,
      subject: 'Your OTP Code',
      text: `Your OTP is: ${otp}. It will expire within 2 minutes.`
    });

    res.status(200).json({ success: true, message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Email send error:', error);  
    res.status(500).json({ success: false, message: 'Failed to send OTP', error: error.message });
  }
};

// 🔹 Verify OTP
exports.verifyOtp = async (req, res) => {
  try {
    const { emailId, otp } = req.body;

    const user = await registrationModel.findOne({ emailId });
    if (!user || user.otp !== otp) {
      return res.status(400).json({ success: false, message: 'Invalid OTP' });
    }

    if (user.otpExpires < new Date()) {
      return res.status(400).json({ success: false, message: 'OTP expired' });
    }

    res.status(200).json({ success: true, message: 'OTP verified' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'OTP verification failed', error: error.message });
  }
};

// 🔹 Reset Password
exports.resetPassword = async (req, res) => {
  try {
    const { emailId, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ success: false, message: 'Passwords do not match' });
    }

    const user = await registrationModel.findOne({ emailId });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.otp = undefined;         // Clear OTP
    user.otpExpires = undefined;  // Clear expiry
    await user.save();

    res.status(200).json({ success: true, message: 'Password reset successful' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Password reset failed', error: error.message });
  }
}; 