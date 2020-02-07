const express = require("express");
const rootDir = require("../util/path");
const path = require("path");
const router = express.Router();

const product = [];
// /admin/add-product ==> GET REQUEST
router.get("/add-product", (req, res, next) => {
  // res.send('<h/1> Hello from Another product! </h1>');
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
  // res.status(200).send('<form action="/add-product" method ="POST"> <input type="text" name="title"><button type="submit">Add Product</button></form> ');
});

// /admin/add-product ==> POST REQUEST
router.post("/add-product", (req, res, next) => {
  product.push(req.body.title);
  console.log(req.body);
  res.redirect("/");
});

exports.routes = router;
exports.products = product;
