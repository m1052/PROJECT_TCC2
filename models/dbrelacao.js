const db = require('../models/db')
async function getRelat(consRelat){
    let getRelat = await db.main('RELACAO','COD.SITUACAO',consRelat).then(getRelat =>{
        return getRelat;
    })
    console.log(getRelat)
    return getRelat;
}
getRelat(`'SI001'`)