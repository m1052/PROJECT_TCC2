const {usuario} = require('../models/usuarioModel')
function insertUsuario(req,res){
    user = new usuario(req.body.nome,req.body.email,req.body.senha,req.body.senha2).saveUsuario()
    res.render('admin/cadForms/cadastroUsuarioView',{msg: user, layout: 'loginMain'})
}
module.exports={
    insertUsuario
}
