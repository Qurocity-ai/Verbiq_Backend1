const express = require('express');
const middleware = require('../middlewares/auth');
const router = express.Router();


router.get('/candidatedashboard',middleware,(req, res) => {
    const user = req.user;

    if(!user){
        return res.status(404).json({
            message: "User not found"
        })
    }

    return res.status(200).json({
        message: user
    })
})

module.exports  = router;