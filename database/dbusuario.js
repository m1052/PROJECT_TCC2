const db = require('./db')
//torna um usuario admin
async function eAdm(user) {
    let  [idUser] = await findUserByID(user)
  
    if (idUser.ADM == '1') {
        let query = `update usuario set adm = '0' where idUser = ${user}`
        msg = await db.connection.query(query).then(rows => {
            rows = [{ success: 'Administrador desabilitado com sucesso' }]
            return rows
        }).catch(err => {
            console.log(err)
            return err
        })
        return msg
    }

    let query = `update usuario set adm = '1' where idUser = ${user}`
    msg = await db.connection.query(query).then(rows => {
        rows = [{ success: 'Administrador habilitado com sucesso' }]
        return rows
    }).catch(err => {
        console.log(err)
        return err
    })
    return msg
}
//retorna todos os usuarios
async function getUserAll(email) {
    const rows = await db.main('*', 'usuario', '1', '1');
    return rows
}
//busca usuario por nome
async function fidUserByEmail(email) {
    const [rows] = await db.main('*', 'usuario', 'email', email);
    //console.log(rows)
    return rows
}
//busca usuario por id
async function findUserByID(id) {
    const rows = await db.main('*', 'usuario', 'idUSer', id);
    return rows
}
//inseri um novo usuario
async function insertUsuario(nome, email, senha) {
    const query = `insert into usuario (nome,email,senha) values ('${nome}','${email}','${senha}')`
    let rows = await db.main('*', 'usuario', 'email', email).then((rows) => {
        if (rows.length > 0) {
            const msg = " ja consta o codigo do aço no banco de dados"
            return msg
        } else {
            db.connection.query(query)
            const msg = " cadastro realizado com sucesso"
            return msg
        }
    })
    return rows
}
module.exports = {
    insertUsuario,
    fidUserByEmail,
    findUserByID,
    getUserAll,
    eAdm

}