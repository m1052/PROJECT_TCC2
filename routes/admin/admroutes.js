const express = require('express');
const router = express();
const controllerAdm = require('../../controllers/adminController')
const controllUser = require('../../controllers/usuarioController')
const controllAco = require('../../controllers/acoController')
const controllEl = require('../../controllers/eletrodoController')
const controllSit = require('../../controllers/situcaoController')
const controllRel = require('../../controllers/relacaoController')
const helpers = require('../../helpers')


// static routes
router.get('/', helpers.auth,helpers.authAdm,(req, res) => {
    res.redirect('/admin/index')
})
router.get('/index',helpers.auth,helpers.authAdm,  (req, res) => {
    res.render('admin/indexAdm', { layout: 'admMain' })
})
//Get routes
router.get('/situacao',helpers.auth,helpers.authAdm,  controllerAdm.getSitAll)
router.get('/relacao',helpers.auth,helpers.authAdm,  controllerAdm.getRelAll)
router.get('/aco',helpers.auth,helpers.authAdm,  controllerAdm.getAcoAll)
router.get('/eletrodo',helpers.auth,helpers.authAdm,  controllerAdm.getElAll)
router.get('/usuario',helpers.auth,helpers.authAdm,  controllerAdm.getUserAll)
//rotas de exclusao
router.get('/excluir/aco/:idAco',helpers.auth,helpers.authAdm, controllAco.excluirAco)
router.get('/excluir/eletrodo/:idEl',helpers.auth,helpers.authAdm, controllEl.excluirEletrodo)
router.get('/excluir/situacao/:idSit',helpers.auth,helpers.authAdm, controllSit.excluirSituacao)
router.get('/excluir/relacao/:idRel',helpers.auth,helpers.authAdm, controllRel.excluirRelacao)
router.get('/excluir/usuario/:idUser',helpers.auth,helpers.authAdm, controllUser.excluirUsuario)
//Get routes forms de cadastro
router.get('/cadastro/aco',helpers.auth,helpers.authAdm, (req, res) => {
    res.render('admin/cadForms/CadastroAcoView', { layout: 'admMain' })
})
router.get('/cadastro/relacao',helpers.auth,helpers.authAdm,controllerAdm.montaCadastroRelacao)
router.get('/cadastro/eletrodo',helpers.auth,helpers.authAdm, (req, res) => {
    res.render('admin/cadForms/cadastroEletrodoView', { layout: 'admMain' })
})
router.get('/cadastro/situacao',helpers.auth,helpers.authAdm, (req, res) => {
    res.render('admin/cadForms/cadastroSituacaoView', { layout: 'admMain' })
})
router.get('/cadastro/usuario', helpers.auth,helpers.authAdm,(req, res) => {
    res.render('admin/cadForms/cadastroUsuarioView', { layout: 'admMain' })
})
router.get('/gerencia',helpers.auth,helpers.authAdm, (req, res) => {

    res.redirect('/admin/index')
})

//Post Routes
router.post('/cadastro/aco',helpers.auth,helpers.authAdm,controllerAdm.insertAco)
router.post('/cadastro/eletrodo',helpers.auth,helpers.authAdm, controllerAdm.insertEletrodo)
router.post('/cadastro/situacao',helpers.auth,helpers.authAdm, controllerAdm.insertSituacao)
router.post('/cadastro/relacao',helpers.auth,helpers.authAdm,controllerAdm.insertRelacao)
router.post('/usuario/modify',helpers.auth,helpers.authAdm,controllUser.eadm)
module.exports = router;
