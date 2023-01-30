const { Schema, model } = require('mongoose');

const Shop = new Schema({
  shopName: { type: String, required: true },
});

module.exports =  model('Shop', Shop);
