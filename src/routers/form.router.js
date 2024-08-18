const router = require("express").Router();
const path = require("path");

const register = require("../controller/user/user.register.controller.js");
router.route("/register").post(register);

router.get("", (req, res) => {
  return res.sendFile(path.join(__dirname + "/../views/clientForm.html"));
});
router.get("/getObject", async (req, res) => {
  const User = require("../models/user.model.js");
  console.log(User.schema.obj);
  res.status(200).json({
    status: "success",
    data: User.schema.obj,
  });
});

module.exports = router;
