const dbSit = require('../database/dbsituacao')
const dbAco = require('../database/dbAco')
const dbEl = require('../database/dbeletrodo')
const {Aco} = require('../models/acoModel')
const {Eletrodo} = require('../models/eletrodoModel')
const {Situacao} = require('../models/situacaoModel')
//Retorna todos os aços
async function getSitAll(req, res) {
    let rows = await dbSit.getSitAll()
    res.render('admin/situacaoAdmView', { getSitAl: rows, layout: 'admMain' })

}
//retorna todos os acos
async function getAcoAll(req, res) {
    let rows = await dbAco.getAcoAll()
    res.render('admin/acoAdmView', { getAcoAl: rows, layout: 'admMain' })
}
async function getElAll(req, res) {
    let rows = await dbEl.getEletrodo()
    res.render('admin/eletrodoAdmView', { getElAl: rows, layout: 'admMain' })

}
//rotas de cadastro
//inserte aço
 function insertAco(req,res){
     aco  =  new Aco(req.body.nome,req.body.cod,req.body.dsc,).saveAco()
     res.render('admin/cadForms/cadastroAcoView',{msg: aco, layout: 'admMain'})
}
//inserte eletrodo
function insertEletrodo(req,res){
    eletrodo  =  new Eletrodo(req.body.cod,req.body.dsc,).saveEletrodo()
    res.render('admin/cadForms/cadastroEletrodoView',{msg: eletrodo, layout: 'admMain'})
}
//insere nova situacao
function insertSituacao(req,res){
    situacao  =  new Situacao(req.body.nome,req.body.dsc,).saveSituacao()
    res.render('admin/cadForms/cadastroEletrodoView',{msg: situacao, layout: 'admMain'})
}

module.exports = {
    getSitAll,
    getAcoAll,
    getElAll,
    insertAco,
    insertEletrodo,
    insertSituacao
}