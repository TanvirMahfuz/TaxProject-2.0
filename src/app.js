const express = require("express");
const app = express();
const path = require("path");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  console.log(req.url);
  next();
});

const homeRouter = require("./routers/home.router.js");
app.use("/api/v1/home", homeRouter);
const formRouter = require("./routers/form.router.js");
app.use("/api/v1/form", formRouter);
app.get("/api/home/temp", (req, res) => {
  res.render("clientForm2", {response: {status: 200, message: "success"}});
});
module.exports = app;
