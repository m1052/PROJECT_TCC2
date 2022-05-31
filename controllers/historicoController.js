const dbRel = require('../models/dbrelacao')
async function historico(req, res) {
    let [rows] = await dbRel.innerRelSit(req.params.sitcod, req.params.acocod, req.params.eletrodocod)
    console.log(rows)
    return rows
}
module.exports= {
    historico,
}

