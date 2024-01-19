const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModal");

// @desc Register a user
// @routes POST /api/user/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const userAvaliable = await User.findOne({ email });
  if (userAvaliable) {
    res.status(400);
    throw new Error("User already exist!");
  }

  //Hash Password
  const hashed = await bcrypt.hash(password, 10);
  console.log(hashed, "hashed pass");
  const user = await User.create({
    username,
    email,
    password: hashed,
  });

  console.log(user, "User created");
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
  res.json({ message: "Register the User" });
});

// @desc Login a user
// @routes POST /api/user/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login the User" });
});

// @desc Current user Info
// @routes POST /api/user/current
// @access private
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user information" });
});

module.exports = { registerUser, loginUser, currentUser };
