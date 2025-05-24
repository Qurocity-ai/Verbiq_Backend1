const express = require ("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth");
const logout = require("../controllers/logoutControllers");

router.post("/", logout);
module.exports = router;