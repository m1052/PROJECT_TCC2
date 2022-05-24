const db = require('../models/dbrelacao')
async function getRelSit(req,res){
    let getRelatSit = await db.getRelSit(`'${req.params.codSit}'`).then(rows =>{
        return rows
    })
    console.log(getRelatSit)
    return getRelatSit
}
module.exports = {
    getRelSit,
}