const express = require ("express");
const router = express.Router();

router.post("/logout",(req,res)=>{
    return res.status(200).json({
        success: true,
        message: "Logged out successfully."
    });
});

module.exports = router;