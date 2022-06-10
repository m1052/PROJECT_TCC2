const db = require('./db')
async function getFavAll(idUser) {
    let query = `select r.idRel,f.codusario,a.acodigo,e.ecodigo,s.sinome from relacao r inner join favorito f on r.idRel = f.codrelacao 
    inner join aco a on r.codaco = a.idAco
    inner join eletrodo e on r.codeletrodo = e.idEl
    inner join situacao s on r.codsituacao = s.idSit 
    where f.codusario = '${idUser}';`
    let rows = await db.connection.query(query)
    return rows
}
//inseri novo favorifo
function insertFavorito(codrelacao, codusuario) {
    let query = `insert into favorito (CODRELACAO,CODUSARIO) values ('${codrelacao}','${codusuario}')`
    db.connection.query(query)
}
//verifica se ja existe relacao  cadastrada em favorito
async function getFavRel(idUser,idRel) {
    let query = `select f.idFav,r.idRel,u.idUser from favorito  f 
    inner join relacao r on f.codrelacao = r.idRel
     inner join usuario u on u.idUser = f.codusario where f.codusario = '${idUser} ' and r.idRel = '${idRel}'`
    let [rows] = await db.connection.query(query)
    return rows;
}

getFavRel('18')
module.exports = {
    insertFavorito,
    getFavRel,
    getFavAll
}
