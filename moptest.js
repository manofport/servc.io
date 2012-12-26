var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'Application/json'});
  res.end(JSON.stringify({'bob':'frank'}));
}).listen(process.env.PORT);
