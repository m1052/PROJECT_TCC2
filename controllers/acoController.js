
const db = require('../models/dbAco')
async function get(req, res) {
    let acoGetAll = await db.getAcoAll().then(acoGet => {
        res.render('acoView', { acoGet: acoGet })
    })
}
module.exports = {
    get
}