const db = require('../models/db')
async function getRelSit(consRelat){
    let getRelat = await db.main('CODACO','RELACAO','CODSITUACAO',consRelat).then(getRelat =>{
        return getRelat;
    })
    return getRelat;
}
//getRelSit(`'SI002'`)
module.exports = {
    getRelSit,
}