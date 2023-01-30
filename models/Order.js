const { Schema, model } = require('mongoose');

const Order = new Schema({
  totalPrice: { type: Number, required: true },
  shop: { type: String, required: true },
  products: [
    {
      productName: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
      image: { type: String, default: '' },
    },
  ],
});

module.exports = model('Order', Order);
