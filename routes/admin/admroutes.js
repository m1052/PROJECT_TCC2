const express = require('express');
const { redirect } = require('statuses');
const router = express();
const controllerAdm = require('../../controllers/adminController')


router.get('/',(req,res)=>{
    res.redirect('/admin/index')
})
router.get('/index',(req,res)=>{
    res.render('admin/indexAdm',{layout:'admMain'})
})


router.get('/situacao',controllerAdm.getSitAll)
router.get('/aco',controllerAdm.getAcoAll)
router.get('/eletrodo',controllerAdm.getElAll)
module.exports = router;