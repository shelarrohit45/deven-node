const express = require("express");
const register = express.Router();
const User = require("../../model/userSchema");

register.post("/resister", (req, res) => {
        const { email, phone, password } = req.body;
        if (!email || !phone || !password ) {
          return res.status(422).json({ error: "please fill all fileds" });
        }
        const otp=null;
        const access_token=null;
        User.findOne({ email: email })
          .then((userExist) => {
            if (userExist) {
              return res.status(422).json({ error: "email already exist" });
            }
            const user = new User({ email, phone, password});
            if (password !== cpassword) {
              return res
                .status(422)
                .json({ err: " password and confirm password not matched" });
            }
            user
              .save()
              .then(() => {
                res.status(201).json({ message: "user registered successfully" });
              })
              .catch((err) => res.status(500).json({ error: "failed to resister" }));
          })
          .catch((err) => {
            console.log(err);
          });
      });      

module.exports = register;
