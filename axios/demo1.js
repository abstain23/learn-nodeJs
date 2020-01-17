const axios = require('axios')

// const baseUrl = 'http://localhost:3000/api'


/*
axios.get(baseUrl)
  .then(res => {
    console.log(res.data)
  })
*/

/*
  axios.post(baseUrl + '/register',{
    username:'frank44444',
    password:'123456'
  })
  .then((res) => {
    console.log(res.data)
  })
  .catch(err => {
    console.log(err)
  })
  */

const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout:1000
})