const fs = require('fs')
let fileReadSteam = fs.createReadStream('index.js')
let count = 0
let str = ''

fileReadSteam.on('data', (chunk) => {
  console.log(`${++count} 接收到：${chunk.length}`)
  str += chunk
})
fileReadSteam.on('end', () => {
  console.log('-结束-')
  console.log(count)
  console.log(str)
})
fileReadSteam.on('error', (err) => {
  console.log(err)
})

let data = 'console.log("Hello World! 我要存入数据！")';

// 创建一个可以写入的流，写入到文件 index.js 中
let writeStream = fs.createWriteStream('index.js');
// 开始写入
writeStream.write(data, 'utf8');
// 写入完成
writeStream.end();
writeStream.on('finish', () => {
  console.log('写入完成！');
  // Console：写入完成
});

