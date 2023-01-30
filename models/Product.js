const { Schema, model } = require('mongoose');

const Product = new Schema({
  productName: { type: String, required: true },
  shop: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, default: '' },
});

module.exports = model('Product', Product);
