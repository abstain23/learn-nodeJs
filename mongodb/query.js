const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/dbtest',{ useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connection
db.on('error',() => {
  console.log('error')
})

db.once('open', () => {
  console.log('success')
})

const studentSchema  = new Schema({
  name:String,
  age:Number,
  sex:{
    type:String,
    default:'男'
  },
  wechat:String
})

const Student = mongoose.model('student', studentSchema)

Student.findOne({name:'treedom'},(err, student) => {
  if(!err){
    console.log(student)
  }else {
    console.log(err)
  }
})