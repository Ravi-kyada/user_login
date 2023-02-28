const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

//require files
dotenv.config({ path: "./config.env" });

require("./db/conn");
app.use(express.json());

const PORT = process.env.PORT;

//midleware
const midleware = (req, res, next) => {
  console.log("hello midleware");
  next();
};
// link router file for route
app.use(require("./router/auth"));

//routing
app.get("/", (req, res) => {
  res.send(`hello from home`);
});

app.get("/contact", (req, res) => {
  res.send(`hello from contact`);
});

app.get("/about", midleware, (req, res) => {
  console.log("about");
  res.send(`hello from about`);
});

app.listen(PORT, () => {
  console.log(`server start at ${PORT}`);
});
