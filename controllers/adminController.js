const dbSit = require('../database/dbsituacao')
const dbAco = require('../database/dbAco')
const dbEl = require('../database/dbeletrodo')
const dbUser = require('../database/dbusuario')
const { Aco } = require('../models/acoModel')
const { Eletrodo } = require('../models/eletrodoModel')
const { Situacao } = require('../models/situacaoModel')
const { Relacao } = require('../models/relacaoModel')

//retorna todas as relações
async function getRelAll(req, res) {
    relacao = new Relacao()
    let rows = await relacao.getAll()
    res.render('admin/relacaoAdmView', { getRelacaoAll: rows, layout: 'admMain' })


}
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

//retorna todos os eletrodos
async function getElAll(req, res) {
    let rows = await dbEl.getEletrodo()
    res.render('admin/eletrodoAdmView', { getElAl: rows, layout: 'admMain' })
}
//retorna todos os usuarios
async function getUserAll(req, res) {
    let rows = await dbUser.getUserAll()
    res.render('admin/usuarioAdmView', { getUserAll: rows, layout: 'admMain' })
}
//cadastro relacao monta tela
async function montaCadastroRelacao(req, res) {
    let Aco = await dbAco.getAcoAll()
    let eletrodo = await dbEl.getEletrodo()
    let situacao = await dbSit.getSitAll()
    res.render('admin/cadForms/cadastroRelacaoView', { Aco: Aco, eletrodo: eletrodo, situacao: situacao,  layout: 'admMain'  })

}

//rotas de cadastro
//inserte aço
function insertAco(req, res) {
    aco = new Aco(req.body.nome, req.body.cod, req.body.dsc,).saveAco()
    res.render('admin/cadForms/cadastroAcoView', { msg: aco, layout: 'admMain' })
}
//inserte eletrodo
function insertEletrodo(req, res) {
    eletrodo = new Eletrodo(req.body.cod, req.body.dsc,).saveEletrodo()
    res.render('admin/cadForms/cadastroEletrodoView', { msg: eletrodo, layout: 'admMain' })
}
//insere nova situacao
function insertSituacao(req, res) {
    situacao = new Situacao(req.body.nome, req.body.dsc,).saveSituacao()
    res.render('admin/cadForms/cadastroSituacaoView', { msg: situacao, layout: 'admMain' })
}
//insere uma nova relacao e monta cadastro de novo
async function insertRelacao(req, res) {
    relacao = new Relacao(req.body.idAco, req.body.idEl, req.body.idSit)
    let msg = await relacao.savRelacao()
    let Aco = await dbAco.getAcoAll()
    let eletrodo = await dbEl.getEletrodo()
    let situacao = await dbSit.getSitAll()
    res.render('admin/cadForms/cadastroRelacaoView', { Aco: Aco, eletrodo: eletrodo, situacao: situacao,msg:msg, layout: 'admMain' })
}

module.exports = {
    getSitAll,
    getAcoAll,
    getElAll,
    getUserAll,
    getRelAll,
    insertAco,
    insertEletrodo,
    insertSituacao,
    insertRelacao,
    montaCadastroRelacao
}