const express = require("express");
const app = express();
const path = require("path");
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  console.log(req.url);
  next();
});

const homeRouter = require("./routers/home.router.js");
app.use("/api/v1/home", homeRouter);

const formRouter = require("./routers/form.router.js");
app.use("/api/v1/form", formRouter);

module.exports = app;
