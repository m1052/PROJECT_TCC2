const express = require('express');
const { redirect } = require('statuses');
const router = express();
const controllerAdm = require('../../controllers/adminController')

// static routes
router.get('/',(req,res)=>{
    res.redirect('/admin/index')
})
router.get('/index',(req,res)=>{
    res.render('admin/indexAdm',{layout:'admMain'})
})
//Get routes
router.get('/situacao',controllerAdm.getSitAll)
router.get('/aco',controllerAdm.getAcoAll)
router.get('/eletrodo',controllerAdm.getElAll)
//Get routes fporms de cadastro
router.get('/cadastro/aco',(req,res)=>{
    res.render('admin/cadForms/cadastroAcoView',{layout:'admMain'})
})
router.get('/cadastro/eletrodo',(req,res)=>{
    res.render('admin/cadForms/cadastroEletrodoView',{layout:'admMain'})
})
router.get('/cadastro/situacao',(req,res)=>{
    res.render('admin/cadForms/cadastroSituacaoView',{layout:'admMain'})
})
router.get('/cadastro/usuario',(req,res)=>{
    res.render('admin/cadForms/cadastroUsuarioView',{layout:'admMain'})
})
//Post Routes
router.post('/cadastro/aco',controllerAdm.insertAco)
module.exports = router;
