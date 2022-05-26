const db = require('../models/db')
async function getEletrodo(){
    let rows = await db.main('*','eletrodo','1','1')
    //console.log(rows)
    return rows
}
//getEletrodo()
module.exports = {
    getEletrodo,
}