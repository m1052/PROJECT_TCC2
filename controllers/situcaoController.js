const express = require('express')
const router = express();
const dbSit = require('../models/dbsituacao');
//retorna todas as situacoes na view
async function get(req, res){
    let sitGet = await dbSit.getSitAll().then(sitGet => {
        res.render('situacaoView', { sitGet: sitGet })
    }
    )}

module.exports = {
    get,
}