const dbSit = require('../database/dbsituacao')
const dbAco = require('../database/dbAco')
const dbEl = require('../database/dbeletrodo')
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
function insertAco(req,res){
    var erros = []
    if(!req.body.nome||typeof req.body.nome == undefined || req.body.nome == null){
        erros.push({texto:'nome invaliado'})
    }
    if(!req.body.cod||typeof req.body.cod == undefined || req.body.cod == null){
        erros.push({texto:'codigo invaliado'})

    }
    if(!req.body.dsc||typeof req.body.dsc == undefined || req.body.dsc == null){
        erros.push({texto:'descrição invaliada'})
    }
    if(erros.length > 0){
        res.render('admin/cadForms/cadastroAcoView',{erros: erros})
    }
    

}
module.exports = {
    getSitAll,
    getAcoAll,
    getElAll,
    insertAco
}