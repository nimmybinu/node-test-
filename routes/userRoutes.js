const express = require("express");
const router = express.Router();
const { registerUser, loginUser, profile } = require("../controllers/userController");
const { session } = require("passport");
var passport = require("passport");
require("../config/passport");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

module.exports = router;
