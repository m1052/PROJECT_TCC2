const dbsit = require('./db')
//retorna  todas as situacoes
async function getSitAll() {
    let rows = await dbsit.main('*', 'SITUACAO', '1', '1')
    return rows;
}
//retorna situacoes por idSit
async function getSitId(idSit) {
    let [rows] = await dbsit.main('*', 'situacao', 'idSit', idSit)
    return rows
}
//inseri nova situacao
function insertSit(sinome,sidescricao){
    const query = `insert into eletrodo (sinome,sidescricao) values (${sinome},${sidescricao})`
    dbsit.connection.query(query)
}

module.exports = {
    getSitAll,
    getSitId
}
