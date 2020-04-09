/*JS 会阻塞后续 DOM 的解析和其它资源(如 CSS，JS 或图片资源)的加载。
css加载不会阻塞DOM树的解析，不会阻塞其它资源(如图片)的加载，CSS加载会阻塞DOM树的渲染，也会阻塞 JS 文件的执行。*/

const http = require('http')
const fs = require('fs')


http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile("index.html", "utf-8", function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      res.end()
    })
  } else if (req.url === '/yellow.js') {
    fs.readFile("yellow.js", "utf-8", function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      setTimeout(function () {
        res.write(data)
        res.end()
      }, 5000)
    })
  } else if (req.url === "/blue.js") {
    fs.readFile("blue.js", "utf-8", function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      setTimeout(function () {
        res.write(data)
        res.end()
      }, 10000)
    })
  } else if (req.url === "/red.css") {
    //延迟 15s
    fs.readFile("red.css", "utf-8", function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/css' })
      setTimeout(function () {
        res.write(data)
        res.end()
      }, 15000)
    })
  } else if (req.url === "/green.css") {
    //延迟 20s
    fs.readFile("green.css", "utf-8", function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/css' })
      setTimeout(function () {
        res.write(data)
        res.end()
      }, 20000)
    })
  }
}).listen(9000, () => {
  console.log('http://localhost:9000')
})