const Product = require("../models/Product");
const client = require('../config/redis');
const getProductWithId = async (req, res) => {
  // {id : 1, name: 'riddhi'}
  console.log('details of user accessing it', req.user)
  const { id } = req.params;
  try {
    const queriedProducts = await Product.find({ _id: id });
    await client.set(id, JSON.stringify(queriedProducts));
    res.status(200).send(queriedProducts);
  } catch (err) {
    res.status(500).send(`error fetching products : ${err}`);
  }
};

const addProduct = (req, res) => {
  try {
    console.log(req.body);
    // prepare the data to be inserted in a obj like structure
    // simply insert this object to the db now
    const product = new Product({
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
    });
    let response = product.save();
    res.status(201).send("product added successfully");
  } catch (err) {
    console.log("error saving the product", err);
    res.status(500).send(`error saving product ${err}`)
  }
};

const getProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).send(allProducts);
  } catch (err) {
    res.status(500).send(`error fetching products : ${err}`);
  }
};

module.exports = { getProductWithId, addProduct, getProducts };
