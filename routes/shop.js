const express = require("express");
const rootDir = require("../util/path");

const path = require("path");

const router = express.Router();
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  console.log(adminData.products);
  // console.log("Another middleware");
  // res.status(200).send('<h1> Hello from express! </h1>');
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
