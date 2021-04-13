'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductsSchema = new Schema({
  product_name: {
    type: String,
    validate: /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/,
    required: true
  },
  stock_quantity: {
    type: Number,
    max: 100,
    required: true
  },
  price: Number,
  sold_out: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

const Products = mongoose.model('products', ProductsSchema)
module.exports = Products