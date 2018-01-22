var http = require('http');

http.createServer(onRequest).listen(8890);
console.log("Server is listening on port 8890");
function onRequest(request, response){
    console.log("Server is in on Request: "+ request.url);

        response.writeHead(200, {"Context-Type": "type:plain/text"});
        response.write("Hello World and Sarvani");
        response.end();
    /*response.writeHead(200, {"Context-Type": 'type:plain/text'}); //statusCode, type of data
    response.write("Hello Sarvani");
    response.end();*/

}