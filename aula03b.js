// rotas

const http = require('http');
const { stringify } = require('querystring');
const porta = 3000;
const host = '127.0.0.1';
const url = require('url');

const servidor = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write(req.url)
    const p = url.parse(req.url , true).query;
    res.write(`<p>${p.nome}</p>`)
    res.write(`<p>${p.curso}</p>`)
    res.end();
})

servidor.listen(porta, host, () => {
    console.log('Servidor Rodadno')
});