const { default: ModelManager } = require('sequelize/types/model-manager')
const db = require('../models/db')
async function getEletrodo(){
    let rows = await db.main('*','eletrodo','1','1')
    return rows
}
module.exports = {
    getEletrodo,
}