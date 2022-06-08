const res = require('express/lib/response')
const db = require('../database/dbfavorito')
const dbRel = require('../database/dbrelacao')
class Favorito {
    _idRel
    _idUser
    constructor(idRel, idUser) {
        this._idRel = idRel
        this._idUser = idUser

    }
    saveFav() {
        var erros = []
        var success = []
        db.getFavRel(this._idRel).then(rows => {
            if (rows.length > 0) {
                erros.push({ erros: "Relação já consta no banco de dados" })
                return erros
            } else {
                success.push({success: "Cadastrado com sucesso"})
                db.insertFavorito(this._idRel,this._idUser)
                return success
            }
        }

        )

    }

}
module.exports = {
    Favorito,
}

/* marco = new Favorito('6', '2');
marco.saveFav() */