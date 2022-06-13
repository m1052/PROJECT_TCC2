const express = require('express');
const router = express();
const controlAco = require('../../controllers/acoController')
const controlRel = require('../../controllers/relacaoController')
const controlSit = require('../../controllers/situcaoController')
const controEl = require('../../controllers/eletrodoController')
const controHis = require('../../controllers/historicoController')
const controlFavorito = require('../../controllers/favoritoController')
router.get('/', (req, res) => {
    res.redirect('/index')
})
router.get('/index', (req,res)=>{
    res.render('indexView')
})
router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err) }
      res.redirect('/');
    })
  })
//rotas dinamicas
router.get('/situacao', controlSit.get)
router.get('/situacao/:codaco', controlRel.getRelSAcoSit)
router.get('/aco', controlAco.get)
router.get('/aco/relacao', controlAco.getAcoRel)
router.get('/aco/:codSit', controlRel.getRelSitAco)
router.get('/eletrodo', controEl.get)
router.get('/favorito', controlFavorito.getFavAll)
router.get('/eletrodo/:codAco/:codSit', controlRel.getRelAcoEl)
router.get('/historico/:sitcod/:acocod/:eletrodocod', controHis.historicoparams)
router.get('/favorito/excluir/:idRel',controlFavorito.excluirFavorito)
//post route
router.post('/cadastro/favorito', controlFavorito.insertFavorito)
module.exports = router;