const dbAco = require('../database/dbAco')
//Retorna todos os aços na view
async function get(req, res) {
    let rows = await dbAco.getAcoAll()
    res.render('acoView', { acoGet: rows })
}
//Retorna somente aços q possuem uma relacao
async function getAcoRel(req, res) {
    let rows = await dbAco.getAcoRel()
    //console.log(rows)
    res.render('acoView', { acoGet: rows })
}
//insere novo aco
/* function insertAco(req, res) {
    dbAco.insertAco(req.body.)
} */

module.exports = {
    get,
    getAcoRel
}