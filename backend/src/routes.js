const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require("./config/multer");
const Post = require("./models/Post");

//GET
routes.get("/", (req, res) => {
  return res.json({ Hello: "World!" });
});

//POST
routes.post("/posts", multer(multerConfig).single("file"), async (req, res) => {
  const { originalname: name, size, filename: key } = req.file;

  const post = await Post.create({
    name,
    size,
    key,
    url: ""
  });
  return res.json({ Hello: "Image has been send!" });
});

module.exports = routes;
