const db = require('../models/db')
//retorna aço para uma situação
async function getRelSitAco(codsituacao){
    let rows = await db.inner('*','aco','relacao','acodigo','codaco','b','codsituacao',codsituacao)
    return rows;
}
//Retorna eletrodo para um  aço
async function  getRelAcoEl(codaco){
    let rows = await db.inner('*','eletrodo','relacao','ecodigo','codeletrodo','b','codaco',codaco)
    return rows;
}
async function getRelSitEletrodo(codeletrodo){
    let rows = await db.inner('*','situacao','relacao','SICODIGO','CODSITUACAO','b','codeletrodo',codeletrodo)
   // console.log(rows)
    return rows;
}
//getRelSitEletrodo('E6010')
//g('SAE-AISI-1045')
module.exports = {
    getRelSitAco,
    getRelAcoEl, 
    getRelSitEletrodo
}
