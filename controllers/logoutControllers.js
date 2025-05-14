const jwt = require("jsonwebtoken");
const { addTokenToBlacklist } = require("../utils/blacklist");

const logout=(req,res)=>{
    const logoutHeader = req.headers.authorization;
    const token = logoutHeader && logoutHeader.split(" ")[1];

    if (!token){
        return res.status(200).json({
          success: true, 
          message: "Logout successful"   
        })
    };

    addTokenToBlacklist(token);

    return res.status(200).json({
         success:true,
         message: "Logged out sucessfully."
    });
};

module.exports = logout;