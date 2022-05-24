const dbAco = require('../models/dbAco')
const dbRel = require('../models/dbrelacao')
async function getRelSit(req,res){
    let getRelatSit = await dbRel.getRelSit(`'${req.params.codSit}'`).then( async function(rows){
       let conAco = await dbAco.getAcoCod()
        console.log(rows.map)
    })
    return getRelatSit
}
module.exports = {
    getRelSit,
}