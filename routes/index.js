'use strict'

const 
  { getProducts } = require('../controllers/getProducts')
, { postProducts } = require('../controllers/postProducts')
, { deleteProducts } = require('../controllers/deleteProducts')
, { updateProducts } = require('../controllers/updateProducts')

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

  if (endpoint + '/:id' && req.method == 'PUT') {
    await updateProducts(req, res)
  }
}