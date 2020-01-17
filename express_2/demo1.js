const express = require('express')
const http = require('http')

const app = express()
//中间件

function myFunctionMid(req, res, next) {
  //some done
  console.log('middle')
  // res.end('middle')
  next()
}

app.use(myFunctionMid)

app.use(function(req, res){
  res.writeHead(200,{"Content-Type": "text/plain" })
  res.end('hello, world')
})

http.createServer(app).listen(8888)