'use strict'

const mongoose = require('mongoose')
const uri = process.env.MONGO_URI

const options = {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true
}

module.exports = async function runMongo() {
  try {
    const conn = await mongoose.connect(uri, options)
  
    console.log('mongodb running')
    return conn
  }
  catch(err) {
    console.error(err)
  }
}