const db = require('../models/db')
async function getRelSitAco(codsituacao){
    let rows = await db.inner('*','aco','relacao','acodigo','codaco','b','codsituacao',codsituacao)
    //console.log(rows)
    return rows
}
async function  getRelAcoEl(codaco){
    let rows = await db.inner('*','eletrodo','relacao','ecodigo','codeletrodo','b','codaco',codaco)
    return rows
}
//getRelAcoEl('SAE-AISI-1045')
module.exports = {
    getRelSitAco,
    getRelAcoEl
}
