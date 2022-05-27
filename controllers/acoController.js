
const db = require('../models/dbAco')
//Retorna todos os aços
async function get(req, res) {
    let acoGetall = await db.getAcoAll().then(acoGet => {
        res.render('acoView', { acoGet: acoGet })
    })
}

module.exports = {
    get
}