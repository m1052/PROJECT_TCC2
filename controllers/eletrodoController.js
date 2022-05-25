const db = require('../models/dbeletrodo')
async function getEletrodo(req,res){
    let rows = await db.getEletrodo()
    res.render('eletroo')
    
}