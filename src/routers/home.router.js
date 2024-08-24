const router = require("express").Router();
const path = require("path");
router.route("").get((req, res) => {
  return res.sendFile(path.join(__dirname + "/../views/home.html"));
});
const {
  search,
  searchAll,
  searchOne,
} = require("../controller/search.controller.js");
router.route("/getClient").post(search);

router.route("/getClientList").get(searchAll);

router.route("/client-profile").post(searchOne);

module.exports = router;
