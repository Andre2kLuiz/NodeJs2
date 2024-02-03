const http = require('http')
const eventos = require('events')
const eventoEmissor = new eventos.EventEmitter()

const final = () => {console.log('fim do processo')}

eventoEmissor.on('msg', () => {
    console.log('Curso de node')
})

eventoEmissor.on('fin', final)

const porta = process.env.PORT || 3000
const retorno = () => {console.log('Servidor rodando')}
const servidor = http.createServer((req, res) => {
    eventoEmissor.emit('msg')
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.write('Andre Luiz')
    eventoEmissor.emit('fim')
    res.end()
})


servidor.listen(porta, retorno)
