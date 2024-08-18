const router = require("express").Router();
const path = require("path");
router.post("/register", async (req, res) => {
  try {
    console.log(req.body);
    return res.sendFile(path.join(__dirname + "/../views/clientForm2.html"));
  } catch (error) {
    console.log(error);
  }
});
router.get("", (req, res) => {
  return res.sendFile(path.join(__dirname + "/../views/clientForm2.html"));
});
router.get("/getObject", async (req, res) => {
  const User = require("../models/temp.js");
  console.log(User.schema.obj);
  res.status(200).json({
    status: "success",
    data: User.schema.obj,
  });
});

module.exports = router;
