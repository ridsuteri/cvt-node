const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required:true },
  category: { type: String, enum: ["grocery", "electronics"] },
  price: { type: Number, min: 99 },
});

productSchema.pre('save',(data)=>{
  console.log('santizing the data via pre save hook')
})

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
