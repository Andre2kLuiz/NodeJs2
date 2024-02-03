const express = require('express')
const rotas = require('./routes/routes')
const porta = process.env.PORT || 3000

const app = express()

app.use('/', rotas)

app.get('*', (req, res) => {
    res.send('Andre Luiz')
})

app.listen(porta, () => {
    console.log('Rodando')
})