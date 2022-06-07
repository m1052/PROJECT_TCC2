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
router.get('/login', (req, res) => {
    res.render('login/loginFormView', { layout: 'loginMain' })
})
router.get('/cadastro/usuario', (req, res) => {
    res.render('admin/cadForms/cadastroUsuarioView', { layout: 'admMain' })
})

module.exports = router;

