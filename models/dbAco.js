const db = require('./db')
//retorna todos os aços
async function getAcoAll() {
    let rows = await db.main('*','ACO', '1', '1')
    return rows
}
getAcoAll();

module.exports = {
    getAcoAll,
}
