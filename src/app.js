const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");

const app = express();

app
.use(helmet())
.use(morgan("combined"))
.use(compression());

app.use("/", (req, res, next) => {
  res.status(200).json("Welcome to backend nodejs!");
})

module.exports = app;
