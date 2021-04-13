'use strict'

const Products = require('../models/products')

exports.updateProducts = async function(req, res) {
  try {
    const url = req.url.split('/')
    const params = url[2]

    let bodyRequest = ''
    
    req.on('data', function(result) {
      bodyRequest += result
    })

    req.on('end', async function() {
      try {
        const result = JSON.parse(bodyRequest)
        const product = await Products.findOneAndUpdate({ _id: params }, result)
        
        if (!product && product == undefined) throw 'tidak ada product yang diupdate'

        res.end(JSON.stringify({
          message: 'success',
          data: product
        }))
      }
      catch(err) {
        res.statusCode = 401

        await res.end(JSON.stringify({
          status: 'failed',
          message: err
        }))
      }
    })
  }
  catch(err) {
    res.statusCode = 500

    await res.end(JSON.stringify({
      message: 'internal server error'
    }))
  }
}