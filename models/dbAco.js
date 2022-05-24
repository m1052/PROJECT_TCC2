const db = require('./db')
async function getAcoCod(parm) {
    let acoGetCod = await db.main('*','ACO', 'ACODIGO', parm).then(rows => {
        return rows
    })
    return acoGetCod
}
async function getAcoAll() {
    let rows = await db.main('*','ACO', '1', '1').then(rows => {
        
        return rows
        
    });
    return rows
}
getAcoAll();

module.exports = {
    getAcoAll,
    getAcoCod
}
