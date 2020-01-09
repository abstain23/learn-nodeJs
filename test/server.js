var http = require("http");
var url = require("url");
var qs = require("querystring");
var fs = require("fs");

http.createServer(function (req, res) {
  // 设置跨域的域名，* 代表允许任意域名跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json;charset="utf8"');
  if (req.method == "POST") {
    //接收发来的用户名和密码
    var result = "";
    //获取前端代码发来的路由地址
    var pathName = url.parse(req.url).pathname;
    // console.log(pathName)
    req.on("data", function (chunk) {
      result += chunk;
    });

    req.on("end", function () {
      var user = JSON.parse(result)
      console.log('user,usr',user)
      if(user.username){
        fs.readFile('db.txt','utf-8',(err,data) => {
          if(err){
            console.log(err)
            res.end('error,读取数据库失败')
          }else {
            if(!data){
              console.log('数据库中没有数据')
              if(pathName === '/login'){
                res.writeHead(200,{
                  'Content-Type': 'application/json;charset="utf8"'
                })
                res.end('err,用户不存在')
                return false
              }
              if(pathName === '/register'){
                var arr =[]
                var obj = {}
                obj.username = user.username;
                obj.password = user.password;
                arr.push(obj)
                fs.writeFileSync('db.txt',JSON.stringify(arr),'utf-8')
                res.end('注册成功')
                return
              }
            }else {
              console.log('数据库中有数据')
              var dbarr = JSON.parse(data)
              dbarr.forEach(ele => {
                if(ele.username === user.username){
                  if(pathName === '/login'){
                    if(ele.password === user.password){
                      res.end("登录成功!");
                      return;
                    }else {
                      res.end("密码错误!");
                      return;
                    }
                  }
                //   if(pathName === '/register'){
                //     res.end('该用户已经存在')
                //     return
                //   }
                }
              });
              if(pathName === '/login'){
                res.end('用户名不存在')
                return
              }
              if(pathName === '/register'){
                var isregister =  dbarr.some(ele => {
                  return ele.username === user.username
                })
                if(isregister){
                  res.end('该用户已经存在')
                  return
                }else {
                  var obj = {};
                  obj.username = user.username;
                  obj.password = user.password;
                  dbarr.push(obj)
                  fs.writeFileSync("db.txt" , JSON.stringify(arr) , "utf-8");
                  res.end("注册成功!");
                  return;
                }
              }
            }
          }
        })
      }
      // res.end('ok')
    });
  } else {
    res.end("get请求");
  }
}).listen(9999, function (err) {
  if (!err) {
    console.log("服务器启动成功，正在监听port9999.");
  }
});