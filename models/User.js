const { Schema, model, default: mongoose } = require('mongoose');

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: {type: String, required: true},
  isActivated: {type: Boolean, default: false},
  activationLink: { type: String },
  name: { type: String, required: true },
  orders: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Order' }
  ],
})

module.exports = model('User', UserSchema); 