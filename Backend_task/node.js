
var http = require('http');
var file = require('fs');
http.createServer(function (req, res) {
file.readFile('server.html', function(err, data) {
    res.writeHead(200);
    res.write(data);
    return res.end();
  });
}).listen(8080);