const db = require('../database/dbfavorito')
const dbRel = require('../database/dbrelacao')
class Favorito {
    _idRel
    _idUser
    constructor(idRel, idUser) {
        this._idRel = idRel
        this._idUser = idUser

    }
    saveFav() {
        var erros = []
        async function verify(idRel) {
         dbRel.getRelacaoById(idRel).then(rows =>{
             if(rows > 0){
                 erros.push({error: "Relação já consta nos favoritos do usuario"})
             }
         })
    

        }

    }
}



marco = new Favorito('1');
marco.saveFav()