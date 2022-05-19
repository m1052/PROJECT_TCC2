const Sequelize = require('sequelize')
const sequelize = new Sequelize('DB_TCC','TCC','123', {
    host: "Localhost",
    dialect:'mysql'
});


module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize
};