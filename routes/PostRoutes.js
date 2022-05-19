const express = require ('express');
const { append } = require('express/lib/response');
const router = express();


/*router.get('/situacao', function(req,res){
    res.end();
});
*/
router.get('/', function(req,res){
    res.render('login');
    
})
router.get('/situacao/:cod', function(req,res){
    res.send('situacao');
    
});

router.get('/aco/:cod', function(req,res){
    res.send('aco');
});


router.get('/eletrodo/:cod',function(req,res){
    res.send('eletrodo'); 
});


module.exports = router;

