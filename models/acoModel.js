const { get } = require('express/lib/response');
const connect = require('../database/db');
class acoModel{
    _ACODIGO
    _ANOME
    _ADESCRICAO
    constructor (cod,nome,desc){
        this._ACODIGO = cod;
        this._ANOME = nome;
        this._ADESCRICAO = desc;
    }

}

function getAcoAll(){
    let sqlGet = await connect.connection.query('SELECT * FROM DBTCC.ACO',  
     async function(err, result, fields) {
    if (err) throw err;
    console.log(result)
    return Object.values(JSON.parse(JSON.stringify(result)));

    }
)



}
console.log(getAcoAll())