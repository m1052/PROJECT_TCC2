const db = require('../models/db')
async function getRelSit(consRelat){
    let getRelat = await db.main('CODACO','RELACAO','CODSITUACAO',consRelat).then(getRelat =>{
        
        return getRelat;
    })
    
    return getRelat.forEach(each =>{console.log(each.CODACO)});
}
//getRelSit(`'SI002'`)
module.exports = {
    getRelSit,
}