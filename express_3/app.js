const express = require('express')
const path = require('path')
const fs = require('fs')
const morgan = require('morgan')

const { formDate } = require('./utils/utils')
const app = express()
const logMiddle = morgan('short')

//日志中间件
// app.use(async (req, res, next) => {
//   console.log('req ip : '+ req.url)
//   console.log('req data : '+ formDate(new Date()))
//   next()
// })
app.use(logMiddle)
//静态文件中间件
// app.use(async (req, res, next) => {
//   let filePath = path.join(__dirname,'static',req.url) //join resolve
//   fs.exists(filePath, (exists) => {
//     if(exists){
//       res.sendFile(filePath)
//     }else {
//       next()
//     }
//   })
// })
let filePath = path.resolve(__dirname, 'static')
app.use(express.static(filePath))
//404中间件
app.use((req, res) => {
  res.status(404)
  res.send('Flie not found')
})

app.listen(3000, () => {
  console.log('app listen 3000')
})