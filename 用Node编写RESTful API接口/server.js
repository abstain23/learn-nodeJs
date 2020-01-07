const http = require('http')

http.createServer((req,res) => {
  let body = `
    <h1>hello</h1>
  `
  res.setHeader('Content-Length',body.length)
  res.setHeader('Content-Type', 'text/html')
  res.end(body)
}).listen(8888)