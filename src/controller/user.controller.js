const mongoose = require("mongoose");
const User = require("../models/user.model.js");

const createUser = async (user) => {
  try {
    const newUser = new User(user);
    if (!newUser) {
      return "could not save user";
    }
    const savedUser = await newUser.save();
    return savedUser;
  } catch (err) {
    return err.message;
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    return null;
  }
};
const getUserById = async (id) => {
  try {
    const user = await User.findById(id);
    if (user == null) {
      return res.status(404).json({message: "User not found"});
    }
    return user;
  } catch (err) {
    return null;
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
  getUserById,
  updateUser,
  deleteUser,
};
