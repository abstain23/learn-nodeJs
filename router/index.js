const server = require('./server')
const router = require('./route')

server.start(router.route)