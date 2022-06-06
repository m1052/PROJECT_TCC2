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

module.exports = {
    getSitAll,
    getAcoAll,
    getElAll
}