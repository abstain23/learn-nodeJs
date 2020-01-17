const express = require('express')
const http = require('http')

const app = express()

app.use(function(req, res, next) {
  console.log(`use ${req.method} to ${req.url}`)
  next()
})

app.use(function(req, res, next) {
  let minute = (new Date()).getMinutes()
  console.log(minute)
  if((minute % 2) === 0){
    next()
  }else {
    res.statusCode = 403
    res.end('Not authorized.')
  }
})

app.use(function(req, res){
  res.end('Secret info: the password is "swordfish"!')
})

http.createServer(app).listen(8888)