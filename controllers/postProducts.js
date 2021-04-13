'use strict'

const Products = require('../models/products')

exports.postProducts = async function(req, res) {
  try {
    let bodyRequest = ''

    req.on('data', function(result) {
      bodyRequest += result
    })

    await req.on('end', async function() {
      try {
        const dataProduct = JSON.parse(bodyRequest)

        const 
          newProduct = new Products(dataProduct) // membuat schema products
        , result = await newProduct.save() // insert data product
        
        res.end(JSON.stringify({
          status: 'success',
          data: result // mengirim data hasil request ke client
        }))
      }
      catch(err) {
        // penanganan error saat melakukan request
        res.statusCode = 400
        
        await res.end(JSON.stringify({
          message: 'kesalahan saat melakukan request'
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