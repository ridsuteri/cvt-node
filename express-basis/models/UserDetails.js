const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  profileImg: String,
  savedAddress: String,
  isPrime: Boolean,
});

const UserDetails = mongoose.model("UserDetails", userDetailsSchema);
module.exports = UserDetails;
