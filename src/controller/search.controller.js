const {getUserById, getAllUsers} = require("./user.controller.js");
let tempUser = null;
const search = async (req, res) => {
  try {
    console.log(req.body.id);
    const results = await getUserById(req.body.id);
    console.log(results);
    if (results == null) return res.status(404).json({msg: "user not found"});
    return res.status(200).json({success: true, data: results});
  } catch (err) {
    return res.status(404).json({
      status: "error",
      message: "user not found",
    });
  }
};
const searchAll = async (req, res) => {
  try {
    const results = await getAllUsers();
    if (results == null) return res.status(400).json({msg: "data not found"});
    return res.status(200).send({msg: "ok", data: results});
  } catch (err) {
    return null;
  }
};

module.exports = {search, searchAll};
