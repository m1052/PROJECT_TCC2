const dbRel = require('../database/dbrelacao')
class Relacao {
    _idAco
    _idEl
    _idSit
    constructor(idAco,idEl,idSit){
        this._idAco = idAco
        this._idEl = idEl
        this._idSit = idSit

    }

   async getAll(){
        let rows = await dbRel.getRelAll()
        return rows

    }


}
module.exports = {
    Relacao
}