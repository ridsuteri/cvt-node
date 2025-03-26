const express = require('express')
const checkCache = require('../middlewares/checkCache')
const {
  getProductWithId,
  addProduct,
  getProducts,
} = require("../controllers/productController");
const router = express.Router()

router.get("/", getProducts);

router.get("/:id",checkCache, getProductWithId);

router.post("/", addProduct);

module.exports = router;