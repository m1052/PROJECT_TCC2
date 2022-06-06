const dbRel = require('../database/dbrelacao')
var hist = [] 
//adiciona a relacao para uma associacao, e retorna para  o array hist
async function historicoparams(req, res) {
    let [rows] = await dbRel.innerRelSit(req.params.sitcod, req.params.acocod, req.params.eletrodocod)
    hist.push(rows)
   //console.log(hist)
    res.render('finalizacoes/historico',{historico: hist, layout:'historicoMain'})
}
//Retorna  o historico sem adicionar
function historico(req, res) {
    res.render('finalizacoes/historico',{historico: hist,layout:'historicoMain'})
}
module.exports= {
    historicoparams,
    historico
}

