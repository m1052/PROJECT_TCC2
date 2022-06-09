const dbHist = require('../database/dbhistorico')
class Historico {

    _idUser
    _idRel
    constructor(idUser, idRel) {

        this._idUser = idUser
        this._idRel = idRel
    }
    saveHistorico() {
     
          dbHist.insertHistorico(this._idRel, this._idUser)
          
        }



}


module.exports = {
    Historico
};
