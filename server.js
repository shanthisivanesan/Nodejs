
var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type': 'text/plain'});
	res.end('Hello Nodejs\n');
}).listen(1337);
console.log('server running on port 1337...');
