var http = require('http')
var log = require('./log.js')
var sayHello = require('./exports.js')

http.createServer(function(request,response){
    console.log(request.url)
    if(request.url == "/admin"){
        response.writeHead(200,{'Content-Type':'text/html'})
        response.write('<html><body><strong>Admin Sayfasi</strong></body></html>')
    }
    else if(request.url == "/") {
        response.writeHead(200,{'Content-Type':'text/html'})
        response.write('<html><body><strong>Ana Sayfa</strong></body></html>')
    }
    else if(request.url == "/customer"){
        response.writeHead(200,{'Content-Type':'application/json'})
        response.write(JSON.stringify({name:'atakan', surName:'bayrak'}))
    }
    response.end()
}).listen(8080)

log.information('Sunucu Yayına Geçti')
console.log(sayHello())