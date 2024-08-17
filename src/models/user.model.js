const mongoose = require("mongoose");
obj = {
  // username: {type: String, required: true, unique: true},
  // password: {type: String, required: true},
  email: {type: String, required: true},
  firstName: {type: String, required: true},
  // lastName: {type: String, required: true},
  // phone: {type: String, required: true},
  // address: {type: String, required: true},
  // city: {type: String, required: true},
  // state: {type: String, required: true},
  // zip: {type: String, required: true},
  // country: {type: String, required: true},
  // profilePicture: {type: String, required: true},
  // coverPicture: {type: String, required: true},
  // about: {type: String, required: true},
  // livesIn: {type: String, required: true},
  // worksAt: {type: String, required: true},
  // relationship: {type: String, required: true},
  // followers: {type: Array, default: []},
  // following: {type: Array, default: []},
};
const userSchema = new mongoose.Schema(obj, {TimeStamps: true});
const User = mongoose.model("User", userSchema);
module.exports = User;
