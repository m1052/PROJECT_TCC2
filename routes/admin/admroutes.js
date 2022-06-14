const express = require('express');
const router = express();
const controllerAdm = require('../../controllers/adminController')
const controllUser = require('../../controllers/usuarioController')
const controllAco = require('../../controllers/acoController')
const controllEl = require('../../controllers/eletrodoController')
const controllSit = require('../../controllers/situcaoController')
const controllRel = require('../../controllers/relacaoController')


// static routes
router.get('/', (req, res) => {
    res.redirect('/admin/index')
})
router.get('/index', (req, res) => {
    res.render('admin/indexAdm', { layout: 'admMain' })
})
//Get routes
router.get('/situacao', controllerAdm.getSitAll)
router.get('/relacao', controllerAdm.getRelAll)
router.get('/aco', controllerAdm.getAcoAll)
router.get('/eletrodo', controllerAdm.getElAll)
router.get('/usuario', controllerAdm.getUserAll)
//rotas de exclusao
router.get('/excluir/aco/:idAco',controllAco.excluirAco)
router.get('/excluir/eletrodo/:idEl',controllEl.excluirEletrodo)
router.get('/excluir/situacao/:idSit',controllSit.excluirSituacao)
router.get('/excluir/relacao/:idRel',controllRel.excluirRelacao)
router.get('/excluir/usuario/:idUser',controllUser.excluirUsuario)
//Get routes forms de cadastro
router.get('/cadastro/aco', (req, res) => {
    res.render('admin/cadForms/CadastroAcoView', { layout: 'admMain' })
})
router.get('/cadastro/relacao',controllerAdm.montaCadastroRelacao)
router.get('/cadastro/eletrodo', (req, res) => {
    res.render('admin/cadForms/cadastroEletrodoView', { layout: 'admMain' })
})
router.get('/cadastro/situacao', (req, res) => {
    res.render('admin/cadForms/cadastroSituacaoView', { layout: 'admMain' })
})
router.get('/cadastro/usuario', (req, res) => {
    res.render('admin/cadForms/cadastroUsuarioView', { layout: 'admMain' })
})
router.get('/gerencia', (req, res) => {

    res.redirect('/admin/index')
})

//Post Routes
router.post('/cadastro/aco', controllerAdm.insertAco)
router.post('/cadastro/eletrodo', controllerAdm.insertEletrodo)
router.post('/cadastro/situacao', controllerAdm.insertSituacao)
router.post('/cadastro/relacao',controllerAdm.insertRelacao)
router.post('/usuario/modify',controllUser.eadm)
module.exports = router;
