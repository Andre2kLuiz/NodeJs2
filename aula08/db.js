const conectar = async () => {
    if(global.conexao && global.conexao.state != 'disconected') return global.conexao
    const mysql = require('mysql2/promise')
    const con = mysql.createConnection("mysql://root:root@localhost:3306/bd_copa")
    console.log('Conectou ao banco')
    global.conexao = con
    return con
}

const todosTimes = async() => {
    const con = await conectar()
    const [linhas] = await con.query('SELECT * FROM selecoes ')
    return await linhas
}

const InserirTimes = async(time) => {
    const con = await conectar()
    const sql = 'INSERT INTO selecoes (selecao, grupo) VALUES (?, ?)'
    const valores = [time.selecao, time.grupo]
    await con.query(sql, valores)
}

const atualizaTimes = async(id, time) => {
    const con = await conectar()
    const sql = 'UPDATE selecoes SET selecao = ?, grupo = ? WHERE id = ?'
    const valores = [time.selecao, time.grupo, id]
    await con.query(sql, valores)
}

const deletarTimes = async(id) => {
    const con = await conectar()
    const sql = 'DELETE FROM selecoes WHERE id = ?'
    const valores = [id]
    await con.query(sql, valores)
}


module.exports = {todosTimes, InserirTimes, atualizaTimes, deletarTimes}