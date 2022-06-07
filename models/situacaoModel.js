const dbSit = require('../database/dbsituacao')
class Situacao {
    _nome
    _descricao
    constructor(nome, descricao) {
        this._nome = nome
        this._descricao = descricao

    }
    saveSituacao() {
        //valida os campos antes de salvar
        var erros = []
        var success = []
        if (!this._nome || typeof this._nome == undefined || this._nome == null) {
            erros.push({ error: 'nome invaliado' })
        }
        if (!this._descricao || typeof this._descricao == undefined || this._descricao == null) {
            erros.push({ error: 'descrição invaliada' })
        }
        if (erros.length > 0) {
            return erros
        }
        else {
            //salva no o novo aço no banco

            dbSit.insertSit(this._nome, this._descricao)
            success.push({ success: 'cadastrado com sucesso' })
            return success
        }

    }

}


module.exports = {
    Situacao
};
