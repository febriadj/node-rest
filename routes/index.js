'use strict'

const 
  { getProducts } = require('../controllers/getProducts')
, { postProducts } = require('../controllers/postProducts')
, { deleteProducts } = require('../controllers/deleteProducts')

module.exports = async function routes(req, res) {
  const endpoint = req.url == '/products'

  if (endpoint && req.method == 'GET') {
    await getProducts(req, res) // include getProducts controllers
  }

  if (endpoint && req.method == 'POST') {
    await postProducts(req, res)
  }

  if (endpoint + '/:id' && req.method == 'DELETE') {
    await deleteProducts(req, res)
  }
}