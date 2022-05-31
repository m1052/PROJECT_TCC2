const db = require('../models/db')
//retorna aço para uma situação
async function getRelSitAco(codsituacao) {
    let rows = await db.inner('*', 'aco', 'relacao', 'acodigo', 'codaco', 'b', 'codsituacao', codsituacao)
    return rows;
}
//Retorna eletrodo para um  aço
async function getRelAcoEl(codaco) {
    let rows = await db.inner('*', 'eletrodo', 'relacao', 'ecodigo', 'codeletrodo', 'b', 'codaco', codaco)
    console.log(rows)
    return rows;
}
//Retorna situacao para um eletrodo
async function getRelSitEletrodo(codeletrodo) {
    let rows = await db.inner('*', 'situacao', 'relacao', 'idSit', 'CODSITUACAO', 'b', 'codeletrodo', codeletrodo)

    return rows;
}
//retorna tudo de relacao para uma situacao
async function innerRelSit(Sitcod, Acocod, Eletrodocod) {
    let [rows] = await db.connection.query(`select * from relacao as r inner join situacao as s on r.codsituacao = s.idSit where r.codsituacao = '${Sitcod}' and r.codaco = '${Acocod}' and r.codeletrodo = '${Eletrodocod}'`)

    return rows
}
getRelSitEletrodo('E7018')
module.exports = {
    getRelSitAco,
    getRelAcoEl,
    getRelSitEletrodo,
    innerRelSit,
}
