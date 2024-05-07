const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
var passport = require("passport");
var passport_jwt = require("passport-jwt");

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

const user = require("./routes/userRoutes");
const post = require("./routes/postRoutes");

app.use("/api/v1", user);
app.use("/api/v1", post);

module.exports = app;
