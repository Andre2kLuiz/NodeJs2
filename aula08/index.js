(async () => {
    const db = require('./db')

    //console.log('Obter novo time')
    //const sel = "Argentina"
    //const gru = "x"
    //await db.InserirTimes({selecao:sel, grupo:gru})

    //console.log('atualizar time')
    //const selN = "chile"
    //const gruN = "B"
   // const id = "4"
   // await db.atualizaTimes(id, {selecao:selN, grupo:gruN})

    console.log('atualizar time')
    const id = "14"
    await db.deletarTimes(id)
    console.log()

    console.log('Obter todos os clientes')
    const clientes = await db.todosTimes()
    console.log(clientes)
})()

