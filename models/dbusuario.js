const db = require('./db')
class usuario{
    _Nome
    _Senha

    constructor (nome,senha){
        this._Nome = nome
        this._Senha = senha
    }
setUsuario(){
    //async function 

}
}
module.exports = {
    usuario,
}





async function valUser(){
    const dbuser = await db.main('*','usuario','us');

}