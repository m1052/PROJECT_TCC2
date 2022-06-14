const dbEl = require('../database/dbeletrodo')
class Eletrodo {

    _codigo
    _descricao
    constructor(codigo, descricao) {

        this._descricao = descricao
        this._codigo = codigo
    }
    async excluirEletrodo(idEL){
        let msg = await dbEl.excluirEletrodo(idEL)
        return msg
    }
    saveEletrodo() {
        //valida os campos antes de salvar
        var erros = []
        var success = []
    
        if (!this._codigo || typeof this._codigo == undefined || this._codigo == null) {
            erros.push({ error: 'codigo invaliado' })

        }
        if (!this._descricao || typeof this._descricao == undefined || this._descricao == null) {
            erros.push({ error: 'descrição invaliada' })
        }
        if (erros.length > 0) {
            return erros
        }
        else {
            //salva no o novo aço no banco

            dbEl.insertEletrodo(this._codigo, this._descricao)
            success.push({ success: 'cadastrado com sucesso' })
            return success
        }

    }

}


module.exports = {
    Eletrodo
};
