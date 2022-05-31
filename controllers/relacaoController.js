const dbRel = require('../models/dbrelacao')
//retorna aços para uma situação
async function getRelSitAco(req, res) {
    let rows = await dbRel.getRelSitAco(req.params.codSit).then(rows => {
        res.render('acoView', { getRelSitAco: rows })
    })
}
//retorno eletrodos para um aço
async function getRelAcoEl(req, res) {
    let rows = await dbRel.getRelAcoEl(req.params.codAco)
    res.render('eletrodoView', { getEletrodoAco: rows })

}
//retorno eletrodos para um aço utilizando metodo 2
async function getRelAcoEl2(req, res) {
    let rows = await dbRel.getRelAcoEl(req.params.codAco)
    res.render('eletrodoView', { getRelAcoEl2: rows })

}
//retorna situacao para um eletrodo
async function getRelSitEl(req, res) {
    let rows = await dbRel.getRelSitEletrodo(req.params.codeletrodo)
    res.render('situacaoView', { getRelSitEl: rows })
}


module.exports = {
    getRelSitAco,
    getRelAcoEl,
    getRelSitEl,
    getRelAcoEl2
}
