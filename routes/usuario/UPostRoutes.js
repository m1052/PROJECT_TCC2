const express = require('express');
const router = express();
const helpers = require('../../helpers')
const controlAco = require('../../controllers/acoController')
const controlRel = require('../../controllers/relacaoController')
const controlSit = require('../../controllers/situcaoController')
const controEl = require('../../controllers/eletrodoController')
const controHis = require('../../controllers/historicoController')
const controlFavorito = require('../../controllers/favoritoController')
router.get('/', helpers.auth,(req, res) => {
    res.redirect('/index')
})
router.get('/index',helpers.auth, (req,res)=>{
    res.render('indexView')
})
router.get('/logout',helpers.auth, function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err) }
      res.clearCookie('connect.sid')
      req.session.destroy(function (err) {
        res.redirect('/'); //Inside a callback… bulletproof!
    });
    })
  })
//rotas dinamicas
router.get('/situacao',helpers.auth, controlSit.get)
router.get('/situacao/:codaco',helpers.auth, controlRel.getRelSAcoSit)
router.get('/aco', controlAco.get)
router.get('/aco/relacao',helpers.auth, controlAco.getAcoRel)
router.get('/aco/:codSit',helpers.auth, controlRel.getRelSitAco)
router.get('/eletrodo', helpers.auth,controEl.get)
router.get('/favorito', helpers.auth,controlFavorito.getFavAll)
router.get('/eletrodo/:codAco/:codSit',helpers.auth, controlRel.getRelAcoEl)
router.get('/historico/:sitcod/:acocod/:eletrodocod', helpers.auth,controHis.historicoparams)
router.get('/favorito/excluir/:idRel',helpers.auth,controlFavorito.excluirFavorito)
//post route
router.post('/cadastro/favorito',helpers.auth, controlFavorito.insertFavorito)
router.post('/aco',helpers.auth, controlAco.findAcoByName)
module.exports = router;