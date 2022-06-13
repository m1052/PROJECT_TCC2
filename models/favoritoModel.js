const db = require('../database/dbfavorito')
class Favorito {
    _idRel
    _idUser
    constructor(idRel, idUser) {
        this._idRel = idRel
        this._idUser = idUser

    }
    async saveFav() {
        var msg = []
        let rows = await db.getFavRel(this._idUser, this._idRel)
        if (rows.length > 0) {
            msg.push({ error: "Relação já consta em favoritos" })
            return msg
        } else {
            msg.push({ success: "Salvo com sucesso" })
            db.insertFavorito(this._idRel, this._idUser)
            return msg
        }
    }
    async excluirFavorito() {
        var msg = []
        db.excluirFavorito(this._idUser, this._idRel)
    }
    async getAllFav() {
        let [rows] = await db.getFavAll(this._idUser)
        return rows
    }

}
marco = new Favorito
marco.getAllFav()
module.exports = {
    Favorito,
}

/* marco = new Favorito('6', '2');
marco.saveFav() */