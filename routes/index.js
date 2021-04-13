'use strict'

const { getProducts } = require('../controllers/getProducts')
const { postProducts } = require('../controllers/postProducts')

const routes = async function(req, res) {
  if (req.url == '/products' && req.method == 'GET') {
    const execution = await getProducts(req, res) // include getProducts controllers
    return execution
  }

  if (req.url == '/products' && req.method == 'POST') {
    const execution = await postProducts(req, res)
    return execution
  }
}

module.exports = routes