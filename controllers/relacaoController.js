const dbRel = require('../models/dbrelacao')
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
  
}
