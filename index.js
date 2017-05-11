var http = require('http');


var server = http.createServer(fnction (requsest, response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World\n");
});

server.listen(8080);

console.log("Server running");