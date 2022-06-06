const dbAco = require('../database/dbAco')
class Aco{
    _nome
    _codigo
    _descricao
    constructor (nome,codigo,descricao){
        this._nome = nome
        this._descricao= descricao
        this._codigo = codigo
    }
saveAco(){
    dbAco.insertAco(this._nome,this._codigo,this._descricao)
}
}
