const mysql = require('mysql2/promise');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'TCC',
  database: 'dbtcc',
  password: '12345678'
})
//select dinamico
async function main(colm, table, parm, val) {

  let query = `SELECT ${colm} FROM ${table} WHERE ${parm} = '${val}'`
  let [rows] = await connection.query(query);
  return rows;

}
//innner join dinamico com wherere
async function inner(colm, tablea, tableb, primarya, primaryb, tableparams, params, val) {
  let query = `select ${colm} from ${tablea} as a inner join ${tableb} as b  on  a.${primarya}  = b.${primaryb} where ${tableparams}.${params}='${val}'`
  let [rows] = await connection.query(query)
  return rows
}
//innner join dinamico sem wherer
async function Simpleinner(colm, tablea, tableb, primarya, primaryb) {
  let query = `select ${colm} from ${tablea} as a inner join ${tableb} as b  on  a.${primarya}  = b.${primaryb}`
  let [rows] = await connection.query(query)
  return rows
}
//innner join dinamico com 2 where
async function Dubleinner(colm, tablea, tableb, primarya, primaryb, tableparamsA, paramsA, valA, tableparamsB, paramsB, valB,) {
  let query = `select ${colm} from ${tablea} as a inner join ${tableb} as b  on  a.${primarya}  = b.${primaryb} where ${tableparamsA}.${paramsA}='${valA}'and ${tableparamsB}.${paramsB} = '${valB}'`
  let [rows] = await connection.query(query)
  return rows
}

module.exports = {
  main,
  inner,
  Simpleinner,
  Dubleinner,
  connection,
};
