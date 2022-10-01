const express = require("express");
const login = express.Router();
const user = require("../../model/userSchema");

login.post("/login", async (req, res) => {
  console.log(req.body);
        try {
          const { email, password } = req.body;
          const userlogdata = await user.findOne({ email: email });
          if (userlogdata.password === password) {
            res.status(200).json({ message: "user login successfully" });
          } else {
            res.status(400).json({ message: "password not match" });
          }
        } catch (err) {
          res.status(400).json({ err: "invalid user email" });
        }
      });

module.exports = login;
