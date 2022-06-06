const db = require('./db')
//retorna aço para uma situação
async function getRelSitAco(codsituacao) {
    let rows = await db.inner('*', 'aco', 'relacao', 'idAco', 'codaco', 'b', 'codsituacao', codsituacao)
    return rows;
}
//Retorna eletrodo para um  aço
async function getRelAcoEl(codaco,codsituacao) {
    let rows = await db.Dubleinner('*', 'relacao', 'eletrodo', 'codeletrodo', 'idEL', 'a', 'codaco', codaco,'a','codsituacao',codsituacao)
    return rows;
}
//Retorna situacao para um aco
async function getRelAcoSit(codaco) {
    let rows = await db.inner('*', 'situacao', 'relacao', 'idSit', 'CODSITUACAO', 'b', 'CODACO', codaco)
    return rows;
}
//retorna tudo de relacao para uma situacao
async function innerRelSit(Sitcod, Acocod, Eletrodocod) {
    const query = `
    select  r.idRel,s.sinome,a.acodigo,e.ecodigo from aco as a 
    inner join relacao as r on r.codaco = a.idAco 
    inner join eletrodo as e on r.codeletrodo = e.idEl 
    inner join situacao as s on r.codsituacao = s.idSit
    where r.codsituacao = ${Sitcod} and r.codaco = ${Acocod} and r.codeletrodo = ${Eletrodocod};  
    `
    let [rows] = await db.connection.query(query)
    return rows
}
module.exports = {
    getRelSitAco,
    getRelAcoEl,
    getRelAcoSit,
    innerRelSit,
}
