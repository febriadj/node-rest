'use strict'

const { getProducts } = require('../controllers/getProducts')

const routes = async function(req, res) {
  if (req.url == '/products' && req.method == 'GET') {
    await getProducts(req, res) // include getProducts controllers
  }
}

module.exports = routes