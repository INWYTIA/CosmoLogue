var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

passport.use(db.UserData.createStrategy());

new LocalStrategy(db.UserData.authenticate());

// mysql strategy
// passport.use(new LocalStrategy(
//   {
//     usernameField: "email"
//   },
//   function(email, password, done) {
//     db.User.findOne({
//       where: {
//         email: email
//       }
//     }).then(function(dbUser) {
//       if (!dbUser) {
//         return done(null, false, {
//           message: "Incorrect email."
//         });
//       }
//       else if (!dbUser.validPassword(password)) {
//         return done(null, false, {
//           message: "Incorrect password."
//         });
//       }
//       return done(null, dbUser);
//     });
//   }
// ));

passport.serializeUser(db.UserData.serializeUser());
passport.deserializeUser(db.UserData.deserializeUser());

module.exports = passport;
