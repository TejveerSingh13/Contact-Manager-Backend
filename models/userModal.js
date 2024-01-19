const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      requied: [true, "Please add the user nama"],
    },
    email: {
      type: String,
      requied: [true, "Please add the user email address"],
      unique: [true, "The email already exist"],
    },
    password: {
      type: String,
      required: [true, "Please pass the user password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
