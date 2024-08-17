const router = require("express").Router();

router.route("").get((req, res) => {
  return res.render("home", {response: {status: 200, message: "success"}});
});

const search = require("../controller/search.controller.js");
router.route("/getClient").post(search);

module.exports = router;
