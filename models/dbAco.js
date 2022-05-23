const db = require('./db')
async function getAcoCod(parm) {
    let acoGetCod = await db.main('ACO', 'ACODIGO', parm)

}
async function getAcoAll() {
    let rows = await db.main('ACO', '1', '1').then(rows => {
        //console.log(typeof(rows))
        return rows
        // JSON.stringify(rows);
    });
    return rows
}
getAcoAll();
module.exports = {
    getAcoAll,
    getAcoCod
}
//getAcoAll();
//getAcoCod(`'CODIGOTST'`);
