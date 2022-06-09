const db = require('./db')
async function getHistoricoUser(idUser){
    const query = `select r.idRel,a.acodigo,e.ecodigo,s.sinome, h.idHist,h.idUser from relacao r 
 inner join historico h on r.idRel = h.idRel
 inner join aco a on r.codaco = a.idAco 
 inner join eletrodo e on r.codeletrodo = e.idEl 
 inner join situacao s on r.codsituacao = s.idSit 
 where h.idUser = ${idUser}`
   let [rows]  = await db.connection.query(query)
   console.log(rows)
   return rows
}
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
    insertHistorico,
    getHistoricoUser
}