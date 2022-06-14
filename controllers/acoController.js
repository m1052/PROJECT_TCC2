const dbAco = require('../database/dbAco')
const {Aco} = require('../models/acoModel')
//exclui um aço
async function excluirAco(req,res){
    aco = new Aco
    msg = await aco.excluirAco(req.params.idAco)
    let rows = await dbAco.getAcoAll()
    res.render('admin/acoAdmView', { getAcoAl: rows, layout: 'admMain', msg: msg })
}
//retorna aço por codigo
async function findAcoByName(req,res){
     aco = new Aco
      aco.findAcoByName(req.body.acodigo).then(rows =>{
        res.render('acoView', { acoGet: rows })
     })
}
//Retorna todos os aços na view
async function get(req, res) {
    let rows = await dbAco.getAcoAll()
    res.render('acoView', { acoGet: rows })
}
//Retorna somente aços q possuem uma relacao
async function getAcoRel(req, res) {
    let rows = await dbAco.getAcoRel()
    res.render('acoView', { acoGet: rows })
}


module.exports = {
    get,
    getAcoRel,
    findAcoByName,
    excluirAco
}