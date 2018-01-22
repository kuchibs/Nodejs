//sar = require("./sarvani");
//bhavan = require("./bhavani");

//Building a server
/*
# What does a server do?
1) It keeps listening on a port
2) when ever a request comes, it responds to it and again goes back to listening
*/

var http = require("http");
//http.createServer(onRequest); //the request listner that createServer() takes is a callback - what we want the server to do when it gets a request..
http.createServer(onRequest).listen(8888);
console.log("The server is now listening on 8888");


function onRequest(request, response){
    console.log("Server is in the onRequest method .. " + request.url);
    response.writeHead(200, {"Context-Type": 'type:plain/text'}); //statusCode, type of data
    response.write("Hello Sarvani");
    response.end();
}
