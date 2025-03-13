const productArray = require("../products.json");

const getProductWithId = (req, res) => {
  // {id : 1, name: 'riddhi'}
  const { id } = req.params;
  const filteredProduct = productArray.filter((product) => {
    if (product.id == id) return product;
  });
  if (filteredProduct.length > 0) {
    res.status(200).send(filteredProduct);
  } else {
    res.status(404).send("product doesnt exits");
  }
};

const addProduct = (req, res) => {
  // will add product
  console.log(req.body);
  res.status(201).send("product added successfully");
};

const getProducts = (req, res) => {
  res.status(200).send(productArray);
};

module.exports = { getProductWithId, addProduct, getProducts };
