const db = require ('./db')
//inseri novo favorifo
function insertFavorito(codrelacao,codusuario){
    let query = `insert into favorito (CODRELACAO,CODUSARIO) values ('${codrelacao}','${codusuario}')`
    db.connection.query(query)
}
async function getFavRel(idRel){
    let query = `select f.idFav,r.idRel,u.idUser from favorito  f inner join relacao r on f.codrelacao = r.idRel inner join usuario u on u.idUser = f.codusario where r.idRel = ${idRel} ` 
       let [rows]= await db.connection.query(query)
       return rows;
}

module.exports = {
    insertFavorito,
    getFavRel,
}
