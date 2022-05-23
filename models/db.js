async function main(consulta, colm, parm) {
  const mysql = require('mysql2/promise');
  const connection = mysql.createPool({
    host: 'localhost',
    user: 'TCC',
    database: 'dbtcc_tst',
    password: '12345678'
  })
  let query = `SELECT * FROM ${consulta} WHERE ${colm} = ${parm}`
  let [rows] = await connection.query(query);
  return rows;

}
module.exports = {
  main,
};
