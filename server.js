'use strict'

const 
  http = require('http')
, routes = require('./routes/index') // include routes
, port = process.env.PORT || 8080

require('dotenv').config({ path: './.env' })
require('./config/database')() // menjalankan koneksi mongodb

// membuat koneksi server
const server = http.createServer((request, response) => {
  request.statusCode = 200
  response.setHeader('Content-Type', 'application/json')

  routes(request, response) // mengirim request dan response ke routes
})

server.listen(port)
console.log('server running on port:' + port)