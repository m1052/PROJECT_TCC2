const express = require ('express');
const router = express();
const dbAco = require('../database/dbAco')
const db = require('../database/db')

router.get('/', function(req,res){
    res.render('login');
    
})
router.get('/situacao/:cod', function(req,res){
    res.send('situacao');
    
});

router.get('/aco', async function(req,res){
        const acoGetAll = await dbAco.getAcoAll()
        console.log(acoGetAll)
        
      res.render('acoView',{acoGetAll: acoGetAll})

        
});


router.get('/eletrodo/:cod',function(req,res){
    res.send('eletrodo'); 
});


module.exports = router;

