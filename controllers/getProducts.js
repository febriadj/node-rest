'use strict'

const Products = require('../models/products')

exports.getProducts = async function(req, res) {
  try {
    const products = await Products.find().sort({ createdAt: - 1 })

    res.statusCode = 200
    res.end(JSON.stringify(products))
  }
  catch(err) {
    res.statusCode = 500

    await res.end(JSON.stringify({
      message: 'internal server error'
    }))
  }
}