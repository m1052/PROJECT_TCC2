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
    async excluirRelacao(idRel){
        let msg = await dbRel.excluirRelacao(idRel)
        return msg
    }
  async savRelacao(){
    var msg = []
    let rows = await dbRel.innerRelSit(this._idSit,this._idAco,this._idEl)
        if (rows.length > 0) {
            msg.push({ error: "Relação já consta no banco de dados" })
            return msg
        } else {
            msg.push({success: "Salvo com sucesso"})
            dbRel.insertRelacao(this._idAco,this._idEl,this._idSit)
            return msg
        }
  }
    async getAll(){
        let rows = await dbRel.getRelAll()
        return rows

    }


}
module.exports = {
    Relacao
}