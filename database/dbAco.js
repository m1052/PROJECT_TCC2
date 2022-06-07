const db = require('./db')
//retorna todos os aços
async function getAcoAll() {
    let rows = await db.main('*', 'ACO', '1', '1')
    return rows
}
//Retorna somente aços que estão possuem relação
async function getAcoRel() {
    let rows = await db.Simpleinner('*', 'aco', 'relacao', 'idAco', 'codaco')
    return rows

}
//insere um aco somente se n existir outro com mesmo codigo aws no banco
async function insertAco(anome, acodigo, adescricao) {
    const query = `insert into aco (anome,acodigo,adescricao) values ('${anome}','${acodigo}','${adescricao}')`
    let rows = await db.main('*', 'ACO', 'acodigo', acodigo).then((rows) => {
        if (rows.length > 0) {
            const msg = " ja consta o codigo do aço no banco de dados"
            return msg
        } else {
            db.connection.query(query)
            const msg = " cadastro realizado com sucesso"
            return msg
        }
    })
    return rows
}


module.exports = {
    getAcoAll,
    getAcoRel,
    insertAco,
    
}
