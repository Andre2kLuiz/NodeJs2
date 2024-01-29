const http = require('http')
const fs = require('fs')
const porta = process.env.PORT 

const server = http.createServer((req, res) => {
    fs.readFile('aula05/site.html', (err, arquivo) => {
        res.writeHead(200,{'Content-Type':'Text-html'})
        res.write(arquivo)
        return res.end()
    })
})

server.listen(porta || 3000, () => {
    console.log('Servido rodando')
})