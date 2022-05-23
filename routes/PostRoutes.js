const express = require('express');
const router = express();
const controlAco = require('../controllers/acoController')
const controlSit = require('../controllers/situcaoController')

router.get('/', function (req, res) {
    res.render('login');

})
router.get('/situacao',controlSit.get)

router.get('/aco', controlAco.get)

router.get('/eletrodo/:cod', function (req, res) {
    res.send('eletrodo');
});


module.exports = router;

