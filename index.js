const sorting = require('l02-sorting')
const http = require('http')

http.createServer((req, res) => {
  let content = ''

  req.on('data', (chunk) => content += chunk)
  req.on('end',() => {
    var arr = JSON.parse(content)
    var sorted = sorting(arr, 'bubble')

    res.writeHead(200, 'ok', {'Content-Type': 'application/json'})
    res.write(JSON.stringify(sorted))
    res.end()
  })
}).listen(8080)

console.log('listening on 8080')
