var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;

module.exports = function (passport) {
    passport.use(
        new JwtStrategy({
            secretOrKey: process.env.JWT_SECRET,

            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        })
    );
};
