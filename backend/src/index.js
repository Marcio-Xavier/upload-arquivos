require("dotenv").config();

var path = require("path");
const express = require("express");
const morgan = require("morgan"); //Log
const mongoose = require("mongoose");

const app = express();

//Database setup
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
);

app.use(require("./routes"));

app.listen(3000);
