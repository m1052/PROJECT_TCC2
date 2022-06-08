const express = require('express');
const router = express();
const controlUsuario = require('../controllers/usuarioController')
const passport = require('passport');
const res = require('express/lib/response');
//Rotas estaticas
router.get('/', function (req, res) {
    res.redirect('/login')

})
//rotas de login
router.get('/login', (req, res) => {
    var error = []
    if (req.query.fail) {
        error.push({ error: "Usuário ou senha inválidos" })
        res.render('login/loginFormView', { layout: 'loginMain', msg: error })
    } else
        res.render('login/loginFormView', { layout: 'loginMain' })

})
router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/usuario/index',
        failureRedirect: '/login?fail=true',
        failureMessage: true
    }
    ))


router.get('/cadastro/usuario', (req, res) => {
    res.render('admin/cadForms/cadastroUsuarioView', { layout: 'loginMain' })
})
//post para cadastro usuario
router.post('/cadastro/usuario', controlUsuario.insertUsuario)
module.exports = router;

