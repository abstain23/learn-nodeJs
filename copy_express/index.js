const route = require('./http-route')
const app = route()
const http = require('http')
var server = http.createServer(app)

app.get('/test',(req,res) => {
  console.log('GET', req.requery)
  res.send(req.require)
})
app.post('/test', function (req, res) {
  console.log('POST', req.query);
  res.send(req.query);
});

server.listen(9999, function () {
  console.log('listen ' + server.address().port);
});