const db = require('../models/dbeletrodo')
async function get(req,res){
    let rows = await db.getEletrodo()
    res.render('eletrodoView', {getEletrodo: rows})
    
}
module.exports = {
    get,
}