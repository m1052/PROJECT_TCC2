const mysql = require('mysql2/promise');
  const connection = mysql.createPool({
    host: 'localhost',
    user: 'TCC2',
    database: 'dbtcc',
    password: '12345678'
  })
async function main(colm,table, parm, val) {
  
  let query = `SELECT ${colm} FROM ${table} WHERE ${parm} = '${val}'`
  let [rows] = await connection.query(query);
  return rows;

}
async function inner(colm,tablea,tableb,primarya,primaryb,tableparams,params,val){
  let query = `select ${colm} from ${tablea} as a inner join ${tableb} as b  on  a.${primarya}  = b.${primaryb} where ${tableparams}.${params}='${val}'`
  let [rows] = await connection.query(`select ${colm} from ${tablea} as a inner join ${tableb} as b  on  a.${primarya}  = b.${primaryb} where ${tableparams}.${params} = '${val}'`)
  return rows
  //console.log(rows)
}
//inner('*','aco','relacao','acodigo','codaco','b','codsituacao','si002')
module.exports = {
  main,
  inner,
};
