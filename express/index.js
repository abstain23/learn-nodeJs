const express = require('express')
const bcrypt = require('bcrypt')
//生成token
const jwt = require('jsonwebtoken')
const { SECRET } = require('./const')
// import SECRET from './const'


const { User } = require('./db')
const app = express()

app.use(express.json())


//定义中间键
const auth = async (req, res, next) => {
    // console.log(req.headers.authorization)
    const raw = String(req.headers.authorization).split(' ').pop()
    const tokenData = jwt.verify(raw, SECRET)
    // console.log(tokenData)
    const id = tokenData.id
    req.user = await User.findOne({_id:id})
    next()
}

app.get('/api',async (req, res) => {
  const user = await User.find()
  res.send(user)
})

app.post('/api/register', async (req, res) => {
  // console.log(req.body)
  const user = await User.create({
    username:String(req.body.username),
    password:String(req.body.password)
  })
  res.send(user)
})

app.post('/api/login',async (req, res) => {
  const user = await User.findOne({
    username: String(req.body.username)
  })
  if(!user) {
    return res.status(422).send({
      message: '用户不存在'
    })
  }

  const isPasswordTure = await bcrypt.compare(req.body.password, user.password)

  if(!isPasswordTure) {
    return res.status(422).send({
      message:'密码错误'
    })
  }
  const token = jwt.sign({
    id:String(user._id)
  },SECRET,{
    expiresIn: 60 * 24
  })

  res.send({
    user,
    token
  })
})

app.get('/api/profile',auth,async (req, res) => {
  res.send(req.user)
})

app.listen(3000, () => {
  console.log('服务器启动成功，监听3000端口')
})