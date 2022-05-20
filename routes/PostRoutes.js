const express = require ('express');
const router = express();
const dbAco = require('../database/dbAco')


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

router.get('/aco', async function(req,res){
    const result = await dbAco.getaco()
    res.json(result)
});


router.get('/eletrodo/:cod',function(req,res){
    res.send('eletrodo'); 
});


module.exports = router;

