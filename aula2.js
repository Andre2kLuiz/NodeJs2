// request e response

const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Andre Luiz\n Ja e");
    res.end();
}).listen(1337);
