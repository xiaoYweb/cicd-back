const http = require('http')

const users = [
  { name: 'lili', age: 20 },
  { name: 'leo', age: 32 },
  { name: 'jojo', age: 15 },
]
const server = http.createServer((req, res) => {
  const { url, } = req;
  res.setHeader('Access-Control-Allow-Origin', '*')
  if (url === '/api/users') {
    res.end(JSON.stringify(users))
  } else {
    res.end('Not Found')
  }
})

const port = 5000;
server.listen(port, () => {
  console.log(`node server is listening port ${port}`)
})
