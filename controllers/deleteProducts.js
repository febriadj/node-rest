'use strict'

const Products = require('../models/products')

exports.deleteProducts = async function(req, res) {
  try {
    const url = req.url.split('/') // split endpoint
    const params = url[2]
    
    // mencari dan menghapus product berdasarkan id atau nama product
    const product = await Products.findOneAndDelete({ 
      $or: [
        { _id: params }, { product_name: params }
      ]
    })

    if (!product && product == undefined) throw 'tidak ada product yang terhapus'
    
    res.end(JSON.stringify({
      status: 'success',
      message: 'product berhasil dihapus',
      data: product // mengirim data product ke client
    }))
  }
  catch(err) {
    res.statusCode = 401

    await res.end(JSON.stringify({
      status: 'failed',
      message: err
    }))
  }
}