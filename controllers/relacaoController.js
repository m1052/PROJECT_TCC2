const dbAco = require('../models/dbAco')
const dbRel = require('../models/dbrelacao')
async function getRelSit(req,res){(0)
    //let row = await dbRel.getRelSit(`'${req.params.codSit}'`)
    let query = await dbRel.getRelSit(`'${req.params.codSit}'`).then(async function (response){
        let rows = await dbAco.getAcoCod(response)
        console.log(rows)
    })
   /* let rows = await dbAco.getAcoCod(query)
    console.log(query)    
   return rows */
}
module.exports = {
    getRelSit,
}