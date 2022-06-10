const dbRel = require('../database/dbrelacao')
//adiciona a relacao para uma associacao, e retorna para  o array hist
async function historicoparams(req, res) {
    let rows = await dbRel.innerRelSit(req.params.sitcod, req.params.acocod, req.params.eletrodocod)
    res.render('finalizacoes/historico', { historico: rows, layout: 'historicoMain' })
}

module.exports = {
    historicoparams,

}

