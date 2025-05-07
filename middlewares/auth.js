const jwt = require("jsonwebtoken");

const middleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized: token not provided",
      });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (!decoded) {
      return res.status(404).json({
        success: false,
        message: "Unauthorized: User not found",
      });
    }

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Error in auth middleware: ${error}`,
    });
  }
};

module.exports = middleware;
