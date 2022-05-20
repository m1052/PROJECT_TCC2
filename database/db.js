var mysql = require('mysql2')
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'TCC',
    password : '123'
  });
  
  /*module.exports = {
      connection: connection,
  }
  */



async function getAcoAll(){
  const aux = await  connection.query('SELECT * FROM DBTCC.ACO')
  console.log('valor de eaux: '+aux)
}
getAcoAll()