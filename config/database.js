'use strict'

const mongoose = require('mongoose')
const uri = process.env.MONGO_URI

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
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