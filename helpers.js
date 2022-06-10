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
            
            msg.push({ error: "Você precisa ser adminitrador para acessar está área" })
         
            res.render('indexView',{ msg: msg})
        }
   
}
module.exports = {
    auth,
    authAdm,
    
    
}