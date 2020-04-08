const fs = require('fs')
// const path = require('path')

console.log('这是一个todo应用')
// console.log(process.argv)
let fileContent
let list = []
const nodePath = process.argv[0]
const todoPath = process.argv[1]
const verb = process.argv[2]
const content = process.argv[3]
const editContent = process.argv[4]

// try {
//   fileContent = fs.readFileSync('./db').toString()
//   list = JSON.parse(fileContent)
//   // console.log(fileContent)
//   console.log(list)
// } catch(err){
//   if(err) fs.writeFileSync('./db','')
// }

function saveDb(list) {
  fs.writeFileSync('./db', JSON.stringify(list))
}
if(fs.existsSync('./db')) {
  fileContent = fs.readFileSync('./db').toString()
  list = JSON.parse(fileContent)
}else {
  fs.writeFileSync('./db')
}

switch(verb){
  case 'add' :
    const task =  content
    list.push([task, false])
    saveDb(list)
    console.log(list)
    break;
  case 'delete' :
    const deleteIndex = content
    list.splice(deleteIndex -1,1)
    // fs.writeFileSync('./db', JSON.stringify(list))
    saveDb(list)
    console.log(list)
    break;
  case 'edit' :
    const editIndex = content
    list[editIndex-1][0] = editContent
    // fs.writeFileSync('./db', JSON.stringify(list))
    saveDb(list)
    console.log(list)
    break;
  case 'done':
    const doneIndex = content
    list[doneIndex - 1][1] = true
    // fs.writeFileSync('./db', JSON.stringify(list))
    saveDb(list)
    console.log(list)
  case 'list':
    console.log(list)
}

