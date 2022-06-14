const {usuario} = require('../models/usuarioModel')
const dbUser = require('../database/dbusuario')
//exclui um usuario
async function excluirUsuario(req,res){
    user = new usuario
    msg = await user.excluirUsuario(req.params.idUser)
    let rows = await dbUser.getUserAll()
    res.render('admin/usuarioAdmView', { getUserAll: rows, layout: 'admMain',msg:msg })
}
//torno usuario adm
async function eadm(req,res){
    [idUser] = req.user
    user = new usuario
    msg = await user.eadm(req.body.idUser)
    let rows = await dbUser.getUserAll()
    res.render('admin/usuarioAdmView',{msg: msg, getUserAll: rows, layout: 'admMain'})

}
//insere novo usuario
function insertUsuario(req,res){
    user = new usuario(req.body.nome,req.body.email,req.body.senha,req.body.senha2).saveUsuario()
    res.render('admin/cadForms/cadastroUsuarioView',{msg: user, layout: 'loginMain'})
}

module.exports={
    insertUsuario,
    eadm,
    excluirUsuario

}
