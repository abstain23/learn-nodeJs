const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')


http.createServer((req,res) => {
  // let pathName = req.url
  let pathName = url.parse(req.url).pathname
  console.log(pathName)
  if(pathName === '/'){
    pathName = 'index.html'
  }
    // 获取文件的后缀名
  let extName = path.extname(pathName)

  if(pathName !== '/favicon.ico') {
    fs.readFile('./web_service/'+ pathName, (err,data) => {
      if(err){
        console.log('404 not found!')
        fs.readFile('./web_service/404.html',(errNotFound, dataNotFound) => {
          if(errNotFound){
            console.log(errNotFound)
          }else {
            res.writeHead(404, {
              "Content-Type": "text/html;charest='utf-8'"
            })
            res.write(dataNotFound)
            res.end()
          }
        })
        return
      }else {
        // 获取文件类型
        let ext = getExt(extName);
        res.writeHead(200, {
          "Content-Type": ext + ";charest='utf-8'"
        })
        res.write(data)
        res.end()
      }
    })
  }
}).listen(8888)

function getExt(extName){
  // switch(extName){
  //   case '.html': return 'text/html';
  //   case '.css': return 'text/css';
  //   case '.js': return 'text/js';
  //   default: return 'text/html';
  // }
  let data = fs.readFileSync('./ext.json')
  let ext = JSON.parse(data.toString())
  return ext[extName]
}