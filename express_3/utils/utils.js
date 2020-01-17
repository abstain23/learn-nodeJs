function formDate(dd){
  return `${dd.getFullYear()}-${(dd.getMonth()+1) > 10 ? (dd.getMonth()+1) : '0' + (dd.getMonth()+1)}-${dd.getDate()} ${dd.getHours()}:${dd.getMinutes()}:${dd.getSeconds()}`
}

module.exports = {
  formDate
}