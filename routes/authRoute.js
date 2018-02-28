const express     = require("express");
const authRoutes  = express.Router();
const passport = require("passport");
// const flash = require("connect-flash");

//User Model
const User        = require("../models/user");

// BCrypt to encrypt passwords
const bcrypt      = require("bcrypt");
const bcryptSalt  = 10;

//Route to Display Signup Form
authRoutes.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

//Route to Handle Signup Form Permission
authRoutes.post("/signup", (req, res, next) => {
    var username  = req.body.username;
    var password  = req.body.password;
    var sign      = req.body.sign;

    //Validation to check  
    if (username === "" || password === "") {
      res.render("auth/signup", { message: "Indicate username and password" });
      return;
    }

    User.findOne({ username }, "username", (err, user) => {
      if (user !== null) {
        res.render("auth/signup", { message: "The username already exists" });
        return;
      }
  
      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);
  
      const newUser = new User({
        username,
        password: hashPass,
        sign
      });
  
      newUser.save((err) => {
        if (err) {
          res.render("auth/signup", { message: "Something went wrong" });
        } else {
          req.login(newUser, (err) => {
            if(err){
              next(err);
              return;
            }
            res.redirect("/");
          })
        }
      });
    });
}); 

authRoutes.get("/login", (req, res, next) => {
  res.render("auth/login", { message: "error" });
});

authRoutes.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true
}));

authRoutes.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    // cannot access session here
    res.redirect("/login");
  });
});


module.exports = authRoutes;