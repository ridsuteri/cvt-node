const express = require('express')
const {
  getProductWithId,
  addProduct,
  getProducts,
} = require("../controllers/productController");
const router = express.Router()

router.get("/", getProducts);

router.get("/:id", getProductWithId);

router.post("/", addProduct);

module.exports = router;