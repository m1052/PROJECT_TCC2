const express = require('express');
const router = express();
const controlAco = require('../../controllers/acoController')
const controlRel = require('../../controllers/relacaoController')
const controlSit = require('../../controllers/situcaoController')
const controEl = require('../../controllers/eletrodoController')
const controHis = require('../../controllers/historicoController')

router.get('/index',(req,res)=>{
    res.render('indexView')
})
//rotas dinamicas
router.get('/situacao', controlSit.get)
router.get('/situacao/:codaco',controlRel.getRelSAcoSit)
router.get('/aco', controlAco.get)
router.get('/aco/relacao', controlAco.getAcoRel)
router.get('/aco/:codSit',controlRel.getRelSitAco)
router.get('/eletrodo',controEl.get)
router.get('/eletrodo/:codAco/:codSit',controlRel.getRelAcoEl)
router.get('/historico/:sitcod/:acocod/:eletrodocod',controHis.historicoparams)
router.get('/historico',controHis.historico)
module.exports = router;