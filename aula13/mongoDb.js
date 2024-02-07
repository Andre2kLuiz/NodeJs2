// senha: Yj3M1p9zCYkpsx79 
// user name: andrecruz084

import { MongoClient } from 'mongodb';
import { connect } from 'mongodb';
const url = new MongoClient ("mongodb+srv://andrecruz084:Yj3M1p9zCYkpsx79@cluster0.nqllb1j.mongodb.net/", {monitorCommands: true})

connect(url, (erro, banco) => {
    if(erro)throw erro;
    const dbo = banco.db('cfbCursos')
    const obj = {curso:"Curso de node", canal:"CFB Cursos"}
    const colecao = "cursos"
    dbo.collection(colecao).insertOne(obj, (erro, resultado) => {
        if(erro)throw erro
        console.log('1 novo curso inserido')
        banco.close()
    })
})