const { Favorito } = require('../models/favoritoModel')
async function excluirFavorito(req, res) {
    let [idUser] = res.locals.user
    const favorito =  new Favorito(req.params.idRel, idUser.idUser )
     favorito.excluirFavorito()
     favorito.getAllFav().then(rows => {
        res.render('favoritoView', { getFavAll: rows })
    })
}
//retorna favorito para um usuario
async function getFavAll(req, res) {
    let [idUser] = res.locals.user
    favorito = new Favorito(req.body.idRel, idUser.idUser)
    favorito.getAllFav().then(rows => {
        res.render('favoritoView', { getFavAll: rows })
    })



}
//insere novo favorito para um usuario
function insertFavorito(req, res) {
    let [idUser] = res.locals.user
    favorito = new Favorito(req.body.idRel, idUser.idUser)
    favorito.saveFav().then(rows =>{
    //console.log(rows)
        res.render('indexView', { msg: rows })
    })


}


module.exports = {
    insertFavorito,
    getFavAll,
    excluirFavorito
}