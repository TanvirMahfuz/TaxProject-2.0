const express = require("express");
const router = express.Router();
const register = require("../controller/user/register.controller.js");
router.route("/userForm").get((req, res) => {
  res.render("ClientForm", {response: {status: 200, message: "success"}});
});
router.route("/register").post(register);
module.exports = router;
