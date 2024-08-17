const router = require("express").Router();
router.post("", async (req, res) => {});
router.get("", (req, res) => {
  res.render("clientForm2", {response: {status: 200, message: "success"}});
});
