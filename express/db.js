const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

mongoose.connect('mongodb://localhost:27017/express-demo',
{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true},
() => {
  console.log('连接成功')
})

const USerSchema = new mongoose.Schema({
  username:{
    type:String,
    unique: true
  },
  password:{
    type:String,
    set(val){
      return bcrypt.hashSync(val, 10)
    }
  }
})

const User = mongoose.model('User', USerSchema)

module.exports = {
  User
}