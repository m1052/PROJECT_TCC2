const {Favorito} = require('../models/favoritoModel')
function insertFavorito(req,res){
    user = res.locals.user
    console.log(user)
    // favorito = new Favorito(req.body.idRel,res.locals.user).saveFav()
   // res.render('usuario/historico',{msg: favorito})

}
module.exports = {
    insertFavorito
}