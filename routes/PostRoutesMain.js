const express = require('express');
const router = express();
const controlUsuario = require('../controllers/usuarioController')
//Rotas estaticas
router.get('/', function (req, res) {
    res.redirect('/login')

})
router.get('/login', (req, res) => {
    res.render('login/loginFormView', { layout: 'loginMain' })
})
router.get('/cadastro/usuario', (req, res) => {
    res.render('admin/cadForms/cadastroUsuarioView', { layout: 'loginMain' })
})
//post para cadastro usuario
router.post('/cadastro/usuario',controlUsuario.insertUsuario)

module.exports = router;

