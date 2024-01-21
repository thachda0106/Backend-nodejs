const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");

const app = express();

//MIDDLEWARES
app
.use(helmet())
.use(morgan("combined"))
.use(compression());

//DB
require('./databases/mongo.db');

//ROUTES
app.use("/", (req, res, next) => {
  res.status(200).json("Welcome to backend nodejs!");
})

module.exports = app;
