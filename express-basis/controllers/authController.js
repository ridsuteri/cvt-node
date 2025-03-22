const User = require("../models/User");
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      let match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = await jwt.sign({userid: user._id, email: user.email},process.env.JWT_SECRET)
        res.status(200).send(token)
      } else {
        res.status(403).send("incorrect password");
      }
    } else {
      res.status(404).send("user not registered");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hasedPassword = await bcrypt.hash(password, 10);
    const userObj = new User({
      name,
      email,
      password: hasedPassword,
    });

    let result = await userObj.save();
    res.status(201).send(`User created successfully: ${result}`);
  } catch (err) {
    res.status(500).send(`Internal server error : ${err}`);
  }
};

module.exports = { login, signup };
