const url = require('url')
const http = require('http')

http.createServer((req,res) => {
  if(req.url !== '/favicon.ico'){
     /**
     * parse 方法需要两个参数：
     * 第一个参数是地址
     * 第二个参数是 true 的话表示把 get 传值转换成对象
     */ 
    console.log(req.url)
    const result = url.parse(req.url, true)
    console.log(result)
    console.log(result.query.name);
    console.log(result.query.age)
  }
  res.writeHead(200, {
    "Content-Type": "text/html;charset=UTF-8"
  })
  console.log(url.parse("http://www.baidu.com"))
  console.log(url.resolve("http://www.baidu.com/yj", "杨杰")) 

  res.write('<h1 style="text-align:center">Hello NodeJS</h1>')
  res.end()
}).listen(8888)