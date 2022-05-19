var mysql = require('mysql2')
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'TCC2',
    password : '123'
  });
  
  module.exports = {
      connection: connection,
  }
  /*connection.connect();
  connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
  });
  
  connection.end();
  */
  function getAcoAll(){
    let sqlGet = connect.connection.query('SELECT * FROM DBTCC.ACO',  
     async function(err, result, fields) {
    if (err) throw err;
    await return Object.values(JSON.parse(JSON.stringify(result)));

    }
)



}
console.log(getAcoAll())