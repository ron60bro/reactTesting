var http = require('http');
var dt=require('./module2');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: "+ dt.myDateTime());
  res.write('hello world')
  res.end
}).listen(8000);