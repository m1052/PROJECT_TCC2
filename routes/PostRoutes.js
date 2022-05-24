const express = require('express');
const router = express();
const controlAco = require('../controllers/acoController')
const controlRel = require('../controllers/relacaoController')
const controlSit = require('../controllers/situcaoController')

router.get('/', function (req, res) {
    res.render('login', { layout: 'loginMain' });

})
router.get('/situacao', controlSit.get)

router.get('/aco/', controlAco.get)

router.get('/eletrodo/:cod', function (req, res) {
    res.send('eletrodo');
});
router.get('/relacao/:codSit',controlRel.getRelSit)
module.exports = router;

