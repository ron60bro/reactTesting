var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hi'); //write a response to the client
  res.end(); //end the response
}).listen(8080);