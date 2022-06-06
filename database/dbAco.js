const db = require('./db')
//retorna todos os aços
async function getAcoAll() {
    let rows = await db.main('*', 'ACO', '1', '1')
    return rows
}
//Retorna somente aços que estão possuem relação
async function getAcoRel() {
    let rows = await db.Simpleinner('*', 'aco', 'relacao', 'idAco', 'codaco')
    return rows

}
async function insertAco(anome, acodigo, adescricao) {
    const query = `insert into aco (anome,acodigo,adescricao) values ('${anome}','${acodigo}','${adescricao}')`
    db.connection.query(query)
}

//console.log(marco)
module.exports = {
    getAcoAll,
    getAcoRel,
    insertAco,
    }
