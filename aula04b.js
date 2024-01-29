// utilizar o express

const express = require('express')
const app = express()
const porta = process.env.PORT 

app.get('/', (req, res) => {
    res.send("Andre Luiz")
})

app.get('/canal', (req, res) => {
    res.json({canal: 'Seja bem vindo'})
})


app.listen(porta || 3000, () => {
    console.log('servidor rodando')
})