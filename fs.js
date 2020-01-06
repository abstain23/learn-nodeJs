const fs = require('fs')

//fs.stat 检查一个读取的是文件还是目录：
fs.stat('index.js', (err,stats) => {
  if(err){
    console.log(err)
    return false
  }else {
    console.log(stats)

    console.log(`文件：${stats.isFile()}`); 
    // Console：文件：true
    
    console.log(`目录：${stats.isDirectory()}`); 
    // Console：目录：false

    return false;

  }
})

//通过 fs.mkdir 创建目录

// fs.mkdir('css', (err) => {
//   if(err){
//     console.log(err)
//     return false
//   }else {
//     console.log('创建目录成功')
//   }
// })


//fs.rmdir 删除目录
// fs.rmdir('css', (err) => {
//   if(err){
//     console.log(err)
//   }else {
//     console.log('删除目录成功')
//   }
// })

//fs.writeFile 来创建写入文件

/**
 * filename (String) 文件名称
 * data (String | Buffer) 将要写入的内容，可以是字符串或者 buffer 数据。
 * · encoding (String) 可选。默认 'utf-8'，当 data 是 buffer 时，该值应该为 ignored。
 * · mode (Number) 文件读写权限，默认 438。
 * · flag (String) 默认值 'w'。
 * callback { Function } 回调，传递一个异常参数 err。
 */
// fs.writeFile('index.js', 'Hello jsyj', (err) => {
//   if(err){
//     console.log(err)
//     return false
//   }else {
//     console.log('写入成功')
//   }
// })

// fs.unlink('index.js', (err) => {
//   if(err){
//     console.log(err)
//     return false
//   }else {
//     console.log('删除index，js')
//   }
// })

// fs.appendFile 追加文件
// fs.appendFile('index.js', '这是追加的内容', (err) => {
//   if(err){
//     console.log(err)
//     return false
//   }else {
//     console.log('追加成功')
//   }
// })

// fs.readFile读取文件
fs.readFile('index.js', (err,data) => {
  if(err){
    console.log(err)
    return false
  }else {
    console.log('读取文件成功')
    console.log(data)
  }
})

// fs.readdir 读取目录
fs.readdir('commonJs', (err,data) => {
  if(err){
    console.log(err)
    return false
  }else {
    console.log('读取目录成功')
    console.log(data)
    return false
  }
})
// fs.rename 重命名

fs.rename('index.js', 'main.txt', (err) => {
  if(err){
    console.log(err)
  }else {
    console.log('重命名成功')
  }
})

//剪切
fs.rename('main.txt', 'commonJs/main.js',(err) => {
  if(err){
    console.log(err)
  }else {
    console.log('剪切成功')
  }
})