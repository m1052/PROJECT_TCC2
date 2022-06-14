const dbRel = require('../database/dbrelacao')
const {Relacao} = require('../models/relacaoModel')
//excluir uma relacao
async function excluirRelacao(req,res){
    relacao = new Relacao
    msg = await relacao.excluirRelacao(req.params.idRel)
    let rows = await dbRel.getRelAll()
    res.render('admin/relacaoAdmView', { getRelacaoAll: rows, layout: 'admMain', msg: msg })
}
//retorna aços para uma situação
async function getRelSitAco(req, res) {
    let rows = await dbRel.getRelSitAco(req.params.codSit).then(rows => {
        res.render('acoView', { getRelSitAco: rows })
    })
}
//retorno eletrodos para um aço e situacao
async function getRelAcoEl(req, res) {
    let rows = await dbRel.getRelAcoEl(req.params.codAco,req.params.codSit)
    //console.log(rows)
    res.render('eletrodoView', { getEletrodoAco: rows })

}
//retorna situacao para um aco
async function getRelSAcoSit(req, res) {
    let rows = await dbRel.getRelAcoSit(req.params.codaco)
    res.render('situacaoView', { getRelAcoSit: rows })
}

module.exports = {
    getRelSitAco,
    getRelAcoEl,
    getRelSAcoSit,
    excluirRelacao
  
}
