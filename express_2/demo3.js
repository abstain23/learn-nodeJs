var express = require("express");
//查看日志
var logger = require("morgan");
var http = require("http");
var app = express();
app.use(logger("short")); 
app.use(function(request, response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello, world!");
});
http.createServer(app).listen(8888);
