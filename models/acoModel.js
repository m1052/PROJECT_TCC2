const connect = require('../database/db');
const aco = connect.connection.query('SELECT * FROM DBTCC.ACS', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
  })

