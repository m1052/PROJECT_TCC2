const dbsit = require('./db')
async function getSitAll(){
        let rows = await dbsit.main('*','SITUACAO','1','1')
       // console.log(rows)
        return rows;
    }
getSitAll()

module.exports={
    getSitAll,
}
