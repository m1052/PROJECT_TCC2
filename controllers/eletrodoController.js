const db = require('../database/dbeletrodo')
const {Eletrodo} = require('../models/eletrodoModel')
//excluir um eletrodo
async function excluirEletrodo(req,res){
    eletrodo = new Eletrodo
    msg = await eletrodo.excluirEletrodo(req.params.idEl)
    let rows = await db.getEletrodo()
    res.render('admin/eletrodoAdmView', { getElAl: rows, layout: 'admMain', msg: msg })
}
//retorna todos os eletrodos na view
async function get(req,res){
    let rows = await db.getEletrodo()
    res.render('eletrodoView', {getEletrodo: rows})
    
}
module.exports = {
    get,
    excluirEletrodo
}