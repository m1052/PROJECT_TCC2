const db = require('./db')
//retorna todos os aços
async function getAcoAll() {
    let rows = await db.main('*','ACO', '1', '1')
    return rows
}
//Retorna somente aços que estão possuem relação
async function getAcoRel(){
    let rows = await db.Simpleinner('*','aco','relacao','idAco','codaco')
     // console.log(rows)
      return rows

}
getAcoRel()
module.exports = {
    getAcoAll,
    getAcoRel
}
