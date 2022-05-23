const express = require('express');
const router = express();
const dbSit = require('../models/dbsituacao');
const dbAco = require('../models/dbAco');


router.get('/', function (req, res) {
    res.render('login');

})
router.get('/situacao', async function (req, res) {
    let sitGet = await dbSit.getSitAll().then(sitGet => {
        res.render('situacaoView', { sitGet: sitGet })
    }
    )
})

router.get('/aco', async function (req, res) {
    let acoGetAll = await dbAco.getAcoAll().then(acoGet => {
        res.render('acoView', { acoGet: acoGet })
    }
    )
})

router.get('/eletrodo/:cod', function (req, res) {
    res.send('eletrodo');
});


module.exports = router;

