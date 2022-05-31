const dbRel = require('../models/dbrelacao')
var hist = [] 
async function historico(req, res) {
    let [rows] = await dbRel.innerRelSit(req.params.sitcod, req.params.acocod, req.params.eletrodocod)
    
    res.render('finalizacoes/historico',{historico: rows})
}
module.exports= {
    historico,
}

