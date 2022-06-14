const db = require('./db')
//exclui uma realcao
async function excluirRelacao(idRel) {
    let query = `delete from relacao where idRel = '${idRel}';`
    msg = await db.connection.query(query).then(msg =>{
        msg = [{success:'Relação excluida com sucesso '}]
        return msg
    }).catch(err =>{

        return err
    })
    return msg
}
//retorna todas as relações
async function getRelAll(){
    let query = `select r.idRel,a.acodigo,e.ecodigo,s.sinome from relacao r 
    inner join aco a on r.codaco = a.idAco
    inner join eletrodo e on r.codeletrodo = e.idEl
    inner join situacao s on r.codsituacao = s.idSit;`
    let [rows] = await db.connection.query(query)
    return rows
}
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
//retorna dados de uma realcao de acordo com os parametros 
async function innerRelSit(Sitcod, Acocod, Eletrodocod) {
    const query = `
    select  r.idRel,a.idAco,e.idEl,s.idSit,s.sinome,a.acodigo,e.ecodigo from aco as a 
    inner join relacao as r on r.codaco = a.idAco 
    inner join eletrodo as e on r.codeletrodo = e.idEl 
    inner join situacao as s on r.codsituacao = s.idSit
    where r.codsituacao = ${Sitcod} and r.codaco = ${Acocod} and r.codeletrodo = ${Eletrodocod};  
    `
    let [rows] = await db.connection.query(query)
    return rows
}
//retorna uma relacao
async function getRelacaoById(idRel){
    let rows = await db.main('*', 'relacao', 'idRel',idRel)
    return rows
}
//insere uma relacao
function insertRelacao(idAco, idEl,idSit) {
    let query = `insert into relacao (codaco,codeletrodo,codsituacao) values ('${idAco}','${idEl}','${idSit}')`
    db.connection.query(query)
}
module.exports = {
    getRelSitAco,
    getRelAcoEl,
    getRelAcoSit,
    innerRelSit,
    getRelacaoById,
    getRelAll,
    insertRelacao,
    excluirRelacao
}
