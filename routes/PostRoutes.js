const express = require('express');
const router = express();
const controlAco = require('../controllers/acoController')
const controlRel = require('../controllers/relacaoController')
const controlSit = require('../controllers/situcaoController')
const controEl = require('../controllers/eletrodoController')
//Rotas estaticas
router.get('/', function (req, res) {
    res.render('login', { layout: 'loginMain' });

})
router.get('/index',(req,res)=>{
    res.render('indexView')
})
//Rotas dinamicas GET
router.get('/situacao', controlSit.get)
router.get('/eletrodo',controEl.get)
router.get('/aco', controlAco.get)
router.get('/aco/:codSit',controlRel.getRelSitAco)
router.get('/eletrodo/:codEl',controlRel.getRelAcoEl)
module.exports = router;

