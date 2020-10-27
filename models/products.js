const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  item:   { type: String, required: true },
  category:  { type: String, required: true },
  price:  { type: Number }

  // superUser: Boolean,
}, {timestamps: true});

const Product = mongoose.model('Message', productSchema)
// const messageSeed = mongoose.model('messageSeed', messageSchema)

module.exports = Product
