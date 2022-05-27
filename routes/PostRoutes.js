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
//rotas dinamicas
router.get('/situacao', controlSit.get)
router.get('/situacao/:codeletrodo', controlRel.getRelSitEl)
router.get('/eletrodo',controEl.get)
router.get('/eletrodo/aco/:codAco',controlRel.getRelAcoEl2)
router.get('/eletrodo/:codAco',controlRel.getRelAcoEl)
router.get('/aco', controlAco.get)
router.get('/aco/:codSit',controlRel.getRelSitAco)

module.exports = router;

