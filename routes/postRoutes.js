const express = require("express");
const router = express.Router();
const { createPost, deletePost, updatePost, getPost, getLocation } = require("../controllers/postController");
const { session } = require("passport");
var passport = require("passport");
require("../config/passport");

router.route("/createPost").post(createPost, passport.authenticate("jwt", { session: false }));
router.route("/deletePost/:id").delete(deletePost, passport.authenticate("jwt", { session: false }));
router.route("/getPost").get(getPost, passport.authenticate("jwt", { session: false }));
router.route("/updatePost/:id").put(updatePost, passport.authenticate("jwt", { session: false }));
router.route("/getLocation").get(getLocation, passport.authenticate("jwt", { session: false }));

module.exports = router;
