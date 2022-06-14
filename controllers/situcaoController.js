const dbSit = require('../database/dbsituacao');
const {Situacao} = require('../models/situacaoModel')
//excluir uma situacao
async function excluirSituacao(req,res){
    situacao = new Situacao
    msg = await situacao.excluirSituacao(req.params.idSit)
    let rows = await dbSit.getSitAll()
    res.render('admin/situacaoAdmView', { getSitAl: rows, layout: 'admMain', msg: msg })
}
//retorna todas as situacoes na view
async function get(req, res){
    let sitGet = await dbSit.getSitAll().then(sitGet => {
        res.render('situacaoView', { sitGet: sitGet })
    }
    )}

module.exports = {
    get,
    excluirSituacao
}