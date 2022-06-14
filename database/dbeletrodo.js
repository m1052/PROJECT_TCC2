const db = require('./db')
//exlcuir um eletrodo
async function excluirEletrodo(idEl) {
    let query = `delete from eletrodo where idEl = '${idEl}';`
    msg = await db.connection.query(query).then(msg =>{
        msg = [{success:'Eletrodo excluido com sucesso '}]
        return msg
    }).catch(err =>{
        msg = [{error: 'ERROR: Eletrodo faz parte de uma relação'}]
        return msg
    })
    return msg
}


//retorna todos os eletrodos
async function getEletrodo() {
    let rows = await db.main('*', 'eletrodo', '1', '1')
    return rows
}

//insere um eletrodo caso n haja outro igual
async function insertEletrodo(ecodigo, edescricao) {
    const query = `insert into eletrodo (ecodigo,edescricao) values ('${ecodigo}','${edescricao}')`
    let rows = await db.main('*', 'eletrodo', 'ecodigo', ecodigo).then((rows) => {
        if (rows.length > 0) {
            const msg = " ja consta o codigo do eletrodo no banco de dados"
            return msg
        } else {
            db.connection.query(query)
            const msg = " cadastro realizado com sucesso"
            return msg
        }
    })
    return rows
}
module.exports = {
    getEletrodo,
    insertEletrodo,
    excluirEletrodo
}