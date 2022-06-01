const dbRel = require('../models/dbrelacao')
var hist = [] 
async function historicoparams(req, res) {
    let [rows] = await dbRel.innerRelSit(req.params.sitcod, req.params.acocod, req.params.eletrodocod)
    hist.push(rows)
    //console.log(hist)
    res.render('finalizacoes/historico',{historico: hist})
}
async function historico(req, res) {
 
   // console.log(hist)
    res.render('finalizacoes/historico',{historico: hist})
}
module.exports= {
    historicoparams,
    historico
}

