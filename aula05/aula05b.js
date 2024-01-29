const http = require('http')
const fs = require('fs')
const porta = process.env.PORT 

const server = http.createServer((req, res) => {
    fs.appendFile('aula05/teste.txt', 'Curso de Node - Andre Luiz', (err) => {
        if(err)throw err;
        console.log('Aquivo criado')
        res.end()
    })
})

server.listen(porta || 3000, () => {
    console.log('Servido rodando')
})