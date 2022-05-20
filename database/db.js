 exports.main = async function (consulta,colm,parm) {
    // get the client
    let query = `SELECT * FROM ${consulta} WHERE ${colm} = ${parm}`
    const mysql = require('mysql2/promise')
    // create the connection
    const connection = await mysql.createConnection({
      host:'localhost', user: 'TCC',
      password: '123',
      database: 'DBTCC'});

    // query database
    let [rows] = await connection.execute(query)
      return rows
  } 
  