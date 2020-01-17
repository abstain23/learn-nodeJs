var express = require("express");
var path = require("path");
var http = require("http");
var app = express();

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

// 当请求根目录的时候被调用
app.get("/", function(request, response) {
  console.log(request.ip)
  response.end("Welcome to my homepage!");
});

// 当请求/about的时候被调用
app.get("/about", function(request, response) {
  response.end("Welcome to the about page!");
});

// 当请求/weather的时候被调用
app.get("/weather", function(request, response) {
  response.end("The current weather is NICE.");
});

// 指定“hello”为路由的固定部分
app.get("/hello/:who", function(request, response) {
  // :who 并不是固定住，它表示 URL 中传递过来的名字
  response.end("Hello, " + request.params.who + ".");
 
});


// 前面都不匹配，则路由错误。返回 404 页面
app.use(function(request, response) {
  response.statusCode = 404;
  response.end("404");
});

app.listen(8888)