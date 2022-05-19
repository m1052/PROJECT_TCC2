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
   let row = [];
    const sqlGet = connect.connection.query('SELECT * FROM DBTCC.ACO',  function(err, rows, fields) {
    if (err) throw err;
    //console.log('The solution is: ', rows[0]);
    return this.rows[0]
})
    console.log(rows[0])
}
getAcoAll();