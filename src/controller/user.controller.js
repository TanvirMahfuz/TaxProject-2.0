const mongoose = require("mongoose");
const User = require("../models/user.model.js");

const createUser = async (user) => {
  try {
    const obj = {
      email: user.email,
      firstName: user.name,
    };
    const newUser = new User(obj);
    console.log("savedUser: ", newUser);
    const savedUser = await newUser.save();

    return savedUser;
  } catch (err) {
    return null;
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({message: "User not found"});
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({message: "User not found"});
    }
    res.json(user);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({message: "User not found"});
    }
    res.json({message: "User deleted"});
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};
module.exports = {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
