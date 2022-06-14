const db = require('./db')
//excluir uma situacao
async function excluirSituacao(idSit) {
    let query = `delete from situacao where idSit = '${idSit}';`
    msg = await db.connection.query(query).then(msg =>{
        msg = [{success:'Situação excluida com sucesso '}]
        return msg
    }).catch(err =>{
        msg = [{error: 'ERROR: Situação faz parte de uma relação'}]
        return msg
    })
    return msg
}
//retorna  todas as situacoes
async function getSitAll() {
    let rows = await db.main('*', 'SITUACAO', '1', '1')
    return rows;
}
//retorna situacoes por idSit
async function getSitId(idSit) {
    let [rows] = await db.main('*', 'situacao', 'idSit', idSit)
    return rows
}
//inseri nova situacao
async function insertSit(sinome,sidescricao){
    const query = `insert into situacao (sinome,sidescricao) values ('${sinome}','${sidescricao}')`
    let rows = await db.main('*', 'situacao', 'sinome', sinome).then((rows) => {
        if (rows.length > 0) {
            const msg = " ja consta o codigo do aço no banco de dados"
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
    getSitAll,
    getSitId,
    insertSit,
    excluirSituacao
}
