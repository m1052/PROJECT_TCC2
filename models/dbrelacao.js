const db = require('../models/db')
async function getRelSitAco(codsituacao){
    let rows = await db.inner('*','aco','relacao','acodigo','codaco','b','codsituacao',codsituacao)
    //console.log(rows)
    return rows
}
//getRelSitAco('SI003')
module.exports = {
    getRelSitAco,
}
