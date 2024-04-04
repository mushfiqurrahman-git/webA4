 
const mongoose = require('mongoose');

//declaring the schema for the user Model

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  purchaseHistory: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  }],
  shippingAddress: String
});

module.exports = mongoose.model('User', userSchema);
