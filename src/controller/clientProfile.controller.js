const path = require("path");
const {searchCurrentUser} = require("../controller/search.controller.js");
const {updateUser} = require("../controller/user.controller.js");

// res.status(404).json({message: "User not found"});
async function updatedUser(req, res) {
  const user = await updateUser(req.body);
  if (user != null) {
    return res
      .status(200)
      .json({success: true, msg: "User updated successfully"});
  } else {
    return res.status(400).json({success: false, msg: "Failed to update user"});
  }
}
module.exports = {searchCurrentUser, updatedUser};
