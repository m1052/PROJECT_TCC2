const db = require('./db')
//retorna todos os eletrodos
async function getEletrodo(){
    let rows = await db.main('*','eletrodo','1','1')
    return rows
}
//inseri novo eletrodo
function insertAco(ecodigo, edescricao) {
    const query = `insert into eletrodo (ecodigo,edescricao) values (${ecodigo},${edescricao})`
    db.connection.query(query)
}
module.exports = {
    getEletrodo,
}