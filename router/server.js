const http = require('http')
const url = require('url')

function start(route){
  function onRequest(request, response) {
    let pathname = url.parse(request.url).pathname
    console.log('pathname:'+pathname)
    route(pathname)
    response.writeHead(200, {
      "Content-Type":"text/html;charset='utf8'"
    })
    response.write('hello server')
    response.end()
  }
  http.createServer(onRequest).listen(8888)
}

module.exports = {
  start
}