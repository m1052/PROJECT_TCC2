const dbRel = require('../database/dbrelacao')
const { Historico } = require('../models/historicoModel')
//adiciona a relacao para uma associacao, e retorna para  o array hist
async function historicoparams(req, res) {
    let [rows] = await dbRel.innerRelSit(req.params.sitcod, req.params.acocod, req.params.eletrodocod)
    if (!req.user || typeof req.user == undefined || req.user == null) {
        res.redirect('/usuario/index')

    } else {
        let { idUser } = req.user[0]
        hist = new Historico(rows.idRel, idUser)
        hist.saveHistorico()
        hist.allHist().then(rows => {
            console.log(rows)
            res.render('finalizacoes/historico', { historico: rows, layout: 'historicoMain' })
        })

    }
    
}
//Retorna  o historico sem adicionar
function historico(req, res) {
    res.render('finalizacoes/historico', { historico: hist, layout: 'historicoMain' })
}
module.exports = {
    historicoparams,
    historico   
}

