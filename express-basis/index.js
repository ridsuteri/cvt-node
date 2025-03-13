const express = require('express')
const productArray = require('./products.json')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/health',(req, res)=>{
    res.status(200).json({message:`App is up and running 🚀 ${port}`})
})

app.get('/products',(req, res)=>{
    res.status(200).send(productArray);
})

app.get('/products/:id',(req, res)=>{
     // {id : 1, name: 'riddhi'}
    const {id} = req.params
    const filteredProduct = productArray.filter((product)=>{
        if(product.id == id)
            return product;
    });
    if(filteredProduct.length > 0){
        res.status(200).send(filteredProduct);
    }else{
        res.status(404).send('product doesnt exits')
    }
})

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
  console.log(`Example app listening on port ${port}`)
})