var http = require('http');

http.createServer(function(req,res){
    res.writeHead('Hello World!');
    res.end();
}).listen(8080);