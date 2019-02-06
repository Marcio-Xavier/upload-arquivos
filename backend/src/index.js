const express = require("express");
const morgan = require("morgan"); //Log
const mongoose = require("mongoose");

const app = express();

//Database setupe
mongoose.connect("mongodb://localhost:27017/upload", {
  useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //Facilitar o envio de arquivos padrão URL Encoded
app.use(morgan("dev"));

app.use(require("./routes"));

app.listen(3000);
