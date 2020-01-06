/**
 * 1. fs.stat 检测是文件还是目录
 * 2. fs.mkdir 创建目录
 * 3. fs.writeFile 创建写入文件
 * 4. fs.appendFile 追加文件
 * 5. fs.readFile 读取文件
 * 6. fs.readdir 读取目录
 * 7. fs.rename 重命名/剪切
 * 8. fs.rmdir 删除目录
 * 9. fs.unlink 删除文件
 */

const fs = require('fs')

// fs.stat('upload', (err,stats) => {
//   if(err){
//     console.log(err)
//     fs.mkdir('uploda',(err) => {
//       if(err){
//         console.log(err)
//       }else {
//         console.log('uploda创建成功')
//       }
//     })
//   }else {
//     console.log(stats.isDirectory())
//     console.log("有 upload 目录，你可以做更多操作！");
//   }
// })

fs.readdir('test', (err,files) => {
  if(err){
    console.log(err)
  }else {
    console.log(files)
    const filesArr = [];

    (function getFile(i){
      if(i==files.length){
        console.log('目录：')
        console.log(filesArr)
        return false
      }
      fs.stat('test/'+ files[i], (err,stats) => {
        if(stats.isDirectory()) {
          filesArr.push(files[i]);
        }

        // 递归调用
        getFile(i+1);
      })
    })(0)
  }
})