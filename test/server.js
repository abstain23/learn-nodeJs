const http = require('http')
const url = require('url')
const qs = require('querystring')

http.createServer((req,res) => {
    //  // 设置跨域的域名，* 代表允许任意域名跨域
    // res.setHeader("Access-Control-Allow-Origin","*");
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    // res.setHeader('Content-Type', 'application/json;charset="utf8"');
    // 设置跨域的域名，* 代表允许任意域名跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  // 设置 header 类型
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  // 跨域允许的请求方式
  res.setHeader('Content-Type', 'application/json');
    
    let method = req.method.toLowerCase()
    // if(method === 'options'){
    //   res.statusCode = 200
    //   res.end('ok')
    // }
    if(method === 'post'){
      let result = ''
      let pathname = url.parse(req.url).pathname
      //监听data事件，获取传过来的数据
      res.on('data',(chunk) => {
        result += chunk
      })
      //数据发送完成
      req.on('end', () => {
        result = JSON.parse(result)
        console.log(result)
        // items.push(item.item)
        // 将数据返回客户端
        // let data = JSON.stringify()
        res.write('sss')
        res.end()
      })
    }else {
      res.statusCode =400
      res.end('get请求')
    }
    
}).listen(9998,(err) => {
  if(!err){
    console.log('监听9999端口')
  }
})