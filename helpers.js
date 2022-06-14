//so deicxa passar usuarios autenticados
function auth (req,res,next){
    if(req.isAuthenticated()){
    
        return next()
    }else{

    res.redirect('/')

    }   
}

//restricao para adm
    function authAdm (req,res,next){
        var msg = []
     let [user] = req.user

        if(user.ADM == 1){
            return next()
        }else{
            
            msg.push({ error: "Você precisa ser administrador para acessar está área" })
         
            res.render('indexView',{ msg: msg})
        }
   
}
function production(){
    if(process.env.PRODUCTION){
        const host = 'us-cdbr-east-05.cleardb.net'
        const user = 'bfadd5427c3c0f'
        const database = 'heroku_c5fdc72931b039c'
        const senha = '1437a78a'
    }else{
        const host = 'localhost'
        const user = 'TCC2'
        const database = 'DBTCC'
        const senha = '12345678'   
}
}
module.exports = {
    auth,
    authAdm,
    production
    
}