const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
//   item:   { type: String, required: true },
//   category:  { type: String, required: true },
  totalCart:  { type: Number },
  numberOfItems:  { type: Number }

  // superUser: Boolean,
}, {timestamps: true});

const Cart = mongoose.model('Message', cartSchema)
// const messageSeed = mongoose.model('messageSeed', messageSchema)

module.exports = Cart
