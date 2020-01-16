const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/dbtest')
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

const student = new Student({
  name:'treedom',
  age:10,
  wechat:'treedom===10'
})

student.save()