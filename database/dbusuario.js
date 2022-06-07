const db = require('./db')
//busca usuario por nome
async function fidUserByEmail(email) {
    const rows = await db.main('*', 'usuario', 'email', email);
    console.log(rows)
}
//busca usuario por id
async function findUserByID(id) {
    const rows = await db.main('*', 'usuario', 'idUSUARIO', id);
    console.log(rows)
}
//inseri um novo usuario
async function insertUsuario(nome,email,senha){
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
    findUserByID
    
}