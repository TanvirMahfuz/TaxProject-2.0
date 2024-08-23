const router = require("express").Router();
const path = require("path");
router.route("").get((req, res) => {
  return res.sendFile(path.join(__dirname + "/../views/home.html"));
});
const {search, searchAll} = require("../controller/search.controller.js");
router.route("/getClient").post(search);

router.route("/getClientList").get(searchAll);

module.exports = router;
