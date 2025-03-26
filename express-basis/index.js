const express = require("express");
const dotenv = require('dotenv');
dotenv.config();
const authMiddleware = require('./middlewares/authMiddleware')
const redisConnection = require('./config/redis')
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const connectToDb = require('./config/db')
const app = express();
const port = 3000;

// 1. using an existing middleware
// 2. create our own middleware
connectToDb();
app.use(express.json());
app.use(express.static('public'))
app.set("view engine", "ejs");
app.use("/products",authMiddleware, productRoutes);
app.use('/userdetails', userRoutes)
app.use('/auth', authRoutes)
// app.use(sampleMiddleware)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/health", (req, res) => {
  res.status(200).json({ message: `App is up and running 🚀 ${port}` });
});

app.get("/template", (req, res) => {
  res.render("./homepage", {
    title: "dynamic title",
    heading: "dynamic heading",
  });
});
// /products?id=1&price<1000
// /products/:id

// get /users - gives all the users
// get /users/1 - give details of user with id 1
// post /users - add a new user to db
// put /users/2 - update the user with id = 2
// delete /users/2 - deletes the user with id = 2

// get /products - give all the products
// get /products/123 - give details of the product with id 123
// post /products - adds a new product to db
//  and so on and so forth

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
