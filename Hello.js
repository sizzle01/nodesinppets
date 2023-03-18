const http = require('http');

http.createServer((request, response)=>{
    response.writeHead(200, {
        'content-type': 'text/plain'
    });

    response.write('hello world!\n');

    response.end;
    
}).listen(1337);