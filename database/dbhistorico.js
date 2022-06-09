const db = require('./db')
async function insertHistorico(idUser,idRel){
        const query = `insert into historico (idUser,idRel) values ('${idUser}','${idRel}')`
        let rows = await db.main('*', 'historico', 'idRel', idRel).then((rows) => {
            if (rows.length > 0) {
                const msg = " ja consta o codigo do eletrodo no banco de dados"
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
    insertHistorico
}