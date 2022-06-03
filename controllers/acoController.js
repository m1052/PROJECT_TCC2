
const dbAco = require('../models/dbAco')
//Retorna todos os aços na view
async function get(req, res) {
    let rows = await dbAco.getAcoAll()       
    res.render('acoView', { acoGet: rows })
}
//Retorna somente aços q possuem uma relacao
async function getAcoRel(req,res){
    let rows = await dbAco.getAcoRel()
    //console.log(rows)
    res.render('acoView',{acoGet: rows  } )


}

module.exports = {
    get,
    getAcoRel
}