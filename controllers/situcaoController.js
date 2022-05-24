const dbSit = require('../models/dbsituacao');
async function get(req, res){
    let sitGet = await dbSit.getSitAll().then(sitGet => {
        res.render('situacaoView', { sitGet: sitGet })
    }
    )}
module.exports = {
    get,
}
