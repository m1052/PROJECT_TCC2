const dbUser = require('./db')
class usuario {
    _Nome
    _Senha
    _adm
    constructor(nome, senha, adm) {
        this._Nome = nome
        this._Senha = senha
        this._adm = adm

    }
}
async function fidUserByName(name) {
    const rows = await dbUser.main('*', 'usuario', 'NOME', name);
    console.log(rows)
}
async function findUserByID(id) {
    const rows = await dbUser.main('*', 'usuario', 'idUSUARIO', id);
    console.log(rows)
}
fidUserByName('marco')
findUserByID('1')
module.exports = {
    usuario,
    fidUserByName,
    findUserByID
    
}