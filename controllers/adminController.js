const dbSit = require('../models/dbsituacao')
const dbAco = require('../models/dbAco')
const dbEl = require('../models/dbeletrodo')
//Retorna todos os aços
async function getSitAll(req,res){
    let rows = await dbSit.getSitAll()
   //console.log(rows)
    res.render('admin/situacaoAdmView',{getSitAl: rows,layout:'admMain'})

}
//retorna todos os acos
async function getAcoAll(req,res){
    let rows = await dbAco.getAcoAll()
    //console.log(rows)
    res.render('admin/acoAdmView',{getAcoAl: rows, layout: 'admMain'})
}
async function getElAll(req,res){
    let rows = await dbEl.getEletrodo()
    res.render('admin/eletrodoAdmView',{getElAl: rows, layout: 'admMain' })

}

module.exports = {
    getSitAll,
    getAcoAll,
    getElAll
}