const dbsit = require('./db')
async function getSitAll(){
        let rows = await dbsit.main('*','SITUACAO','1','1').then(rows =>{
            return rows;
        })
        return rows;
    }
getSitAll()

module.exports={
    getSitAll,
}
