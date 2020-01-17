//静态文件

const express = require('express')
const path = require('path')

const app = express()

const publicPath = path.resolve(__dirname, 'public')
// console.log(__dirname)
// console.log(__filename)
// console.log(publicPath)
app.use(express.static(publicPath))

app.use(function(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Looks like you didn't find a static file.");
});

app.listen(8888)