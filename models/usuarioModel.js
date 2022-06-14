const bcrypt = require('bcryptjs')
const dbUsuario = require('../database/dbusuario')
class usuario {
    _Nome
    _email
    _Senha
    _Senha2
    constructor(nome, email, senha, senha2) {
        this._Nome = nome
        this._Senha = senha
        this._Senha2 = senha2
        this._email = email
    }
    async excluirUsuario(idUser){
        let msg = await dbUsuario.excluirUsuario(idUser)
        return msg
    }
    saveUsuario() {
        var erros = []
        var success = []

        if (!this._Nome || typeof this._Nome == undefined || this._Nome == null) {
            erros.push({ error: 'nome invaliado' })

        }
        if (!this._email || typeof this._email == undefined || this._email == null) {
            erros.push({ error: 'email invaliada' })
        }
        if (!this._Senha || typeof this._Senha == undefined || this._Senha == null) {
            erros.push({ error: 'senha invaliada' })
        }
        if (this._Senha.length < 5 ) {
            erros.push({ error: 'senha invaliada' })
        }
        if (this._Senha != this._Senha2) {
            erros.push({ error: 'as senhas digitadas não são iguais' })

        }if(this._Nome.length > 45 || this._email > 45){
            erros.push({ error: 'nome ou email muito extenso' })
        }
        if (erros.length > 0) {
            return erros
        }
        else {
            //salva no o novo aço no banco
            bcrypt.genSalt(10,(erro,salt)=>{
              bcrypt.hash(this._Senha,salt,(erro,hash)=>{
                  if(erro){
                      res.redirect('/')
                  }
                  this._Senha = hash
                  dbUsuario.insertUsuario(this._Nome, this._email, this._Senha)
              })
            })  
            success.push({ success: 'cadastrado com sucesso' })
            return success
        }

    }
 async   eadm(idUser){
       msg =  await dbUsuario.eAdm(idUser)
       return msg
    }
}
module.exports = {
    usuario,
}
