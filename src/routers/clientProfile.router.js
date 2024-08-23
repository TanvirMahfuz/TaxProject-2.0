const router = require("express").Router();
const path = require("path");
const {
  searchCurrentUser,
  updatedUser,
} = require("../controller/clientProfile.controller.js");

router.get("", (req, res) => {
  return res.sendFile(path.join(__dirname + "/../views/clientProfile.html"));
});

router.get("/user", searchCurrentUser);
router.post("/user", updatedUser);

module.exports = router;
