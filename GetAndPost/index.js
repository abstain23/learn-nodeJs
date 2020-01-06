const http = require('http')
let items = []

http.createServer((req,res) => {
  // 设置跨域的域名，* 代表允许任意域名跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  // 设置 header 类型
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  // 跨域允许的请求方式
  res.setHeader('Content-Type', 'application/json');

  //判断请求
  switch(req.method){
    // post 请求时，浏览器会先发一次 options 请求，如果请求通过，则继续发送正式的 post 请求
    case "OPTIONS":
      res.statusCode = 200
      res.end()
      break
    case "GET":
      let data = JSON.stringify(items)
      res.write(data)
      res.end()
      break
    case "POST":
      let item = ''
      // 读取每次发送的数据
      req.on('data',(chunk) => {
        item += chunk
      })
      //数据发送完成
      req.on('end', () => {
        item = JSON.parse(item)
        console.log(item)
        items.push(item.item)
        // 将数据返回客户端
        let data = JSON.stringify(items)
        res.write(data)
        res.end()
      })
      break
  }
}).listen(8888)

console.log('http server 开启 ， 监听8888端口');