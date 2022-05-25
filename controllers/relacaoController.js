const dbRel = require('../models/dbrelacao')
async function getRelSitAco(req,res){
    let rows = await dbRel.getRelSitAco(req.params.codSit).then( rows =>{
        res.render('acoView',{getRelSitAco: rows})
})}
async function getRelAcoEl(req,res){
    let rows = await dbRel.getRelAcoEl(req.params.codEl)
    res.render('eletrodoView',{getEletrodoAco:rows})

}
module.exports = {
    getRelSitAco,
    getRelAcoEl
}
