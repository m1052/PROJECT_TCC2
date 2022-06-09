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
    async allHist() {
        console.log(this._idUser)
        let rows = await dbHist.getHistoricoUser(this._idUser).then(rows =>{
            return rows
        })
      console.log(rows)
        return rows
    }



}


module.exports = {
    Historico
};
