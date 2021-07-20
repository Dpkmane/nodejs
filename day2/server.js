var http=require('http');



var uc = require('upper-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World!"));
  res.end();
}).listen(8080);

var server=http.createServer(onRquest).listen(9090);
//server.listen(9090);
console.log("server has been strated");