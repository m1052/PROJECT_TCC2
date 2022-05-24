const dbRel = require('../models/dbrelacao')
async function getRelSitAco(req,res){
    let rows = await dbRel.getRelSitAco(req.params.codSit).then( rows =>{
        res.render('acoView',{getRelSitAco: rows})
})}
module.exports = {
    getRelSitAco,
}
