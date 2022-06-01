const express = require('express');
const router = express();
const controlAco = require('../controllers/acoController')
const controlRel = require('../controllers/relacaoController')
const controlSit = require('../controllers/situcaoController')
const controEl = require('../controllers/eletrodoController')
const controHis = require('../controllers/historicoController')
//Rotas estaticas
router.get('/', function (req, res) {
    res.redirect('/login')

})
router.get('/index',(req,res)=>{
    res.render('indexView')
})
router.get('/login',(req,res)=>{
    res.render('login/login',{layout:'loginMain'})
})
//rotas dinamicas
router.get('/situacao', controlSit.get)
router.get('/situacao/:codaco',controlRel.getRelSAcoSit)
router.get('/aco', controlAco.get)
router.get('/aco/relacao', controlAco.getAcoRel)
router.get('/aco/:codSit',controlRel.getRelSitAco)
router.get('/eletrodo',controEl.get)
router.get('/eletrodo/aco/:codAco',controlRel.getRelAcoEl2)
router.get('/eletrodo/:codAco',controlRel.getRelAcoEl)
router.get('/historico/:sitcod/:acocod/:eletrodocod',controHis.historicoparams)
router.get('/historico',controHis.historico)

module.exports = router;

    