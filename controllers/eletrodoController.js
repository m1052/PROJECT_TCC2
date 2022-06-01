const db = require('../models/dbeletrodo')
//retorna todos os eletrodos na view
async function get(req,res){
    let rows = await db.getEletrodo()
    res.render('eletrodoView', {getEletrodo: rows})
    
}
module.exports = {
    get,
}