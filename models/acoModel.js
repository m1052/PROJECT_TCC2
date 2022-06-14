const dbAco = require('../database/dbAco')
class Aco {
    _nome
    _codigo
    _descricao
    constructor(nome, codigo, descricao) {
        this._nome = nome
        this._descricao = descricao
        this._codigo = codigo
    }
    async excluirAco(idAco){
        let msg = await dbAco.excluirAco(idAco)
        return msg
    }
    saveAco() {
        //valida os campos antes de salvar
        var erros = []
        var success = []
        if (!this._nome || typeof this._nome == undefined || this._nome == null) {
            erros.push({ error: 'nome invalido' })
        }
        if (!this._codigo || typeof this._codigo == undefined || this._codigo == null) {
            erros.push({ error: 'codigo invalido' })

        }
        if (!this._descricao || typeof this._descricao == undefined || this._descricao == null) {
            erros.push({ error: 'descrição invalida' })
        }
        if (erros.length > 0) {
            return erros
        }
        else {
            //salva no o novo aço no banco

            dbAco.insertAco(this._nome, this._codigo, this._descricao)
            success.push({ success: 'cadastrado com sucesso' })
            return success
        }

    }


    async findAcoByName(acodigo) {
        let rows = await dbAco.findAcoByName(acodigo)
        return rows
    }
}



module.exports = {
    Aco
};
