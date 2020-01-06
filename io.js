/*
console.log("1");

// console.log("2");
let fs = require('fs');
getExt = () => {
  fs.readFile('ext.json', (err, data) => {
    console.log("2");
  })
}
getExt();

console.log("3");

//这就是 Node 的非租塞性 I/O 驱动。
*/

/**
 * Node 事件循环：
 * 1. Node 是单进程单线程应用程序，但是通过事件和回调支持并发，所以性能非常高。
 * 2. Node 的每一个 API 都是异步的，并作为一个独立线程运行，使用异步函数调用，并处理并发。
 * 3. Node 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件。
 */

const fs = require('fs')
const events = require('events')
//实例化事件对象
const EventEmitter = new events.EventEmitter()

getExt = () => {
  fs.readFile('ext.json', (err,data) => {
    // 将 data 广播出去
    EventEmitter.emit('data', data.toString())
  })
}
getExt()

//监听data

EventEmitter.on('data', (ext) => {
  console.log(ext)
})