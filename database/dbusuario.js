const dbUser = require('./db')

async function fidUserByName(name) {
    const rows = await dbUser.main('*', 'usuario', 'NOME', name);
    console.log(rows)
}
async function findUserByID(id) {
    const rows = await dbUser.main('*', 'usuario', 'idUSUARIO', id);
    console.log(rows)
}
fidUserByName('marco')
findUserByID('1')
module.exports = {
    usuario,
    fidUserByName,
    findUserByID
    
}