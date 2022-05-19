const { error } = require('console');
const Sequelize = require('sequelize')
const sequelize = new Sequelize('DB_TCC','TCC2','123', {
    host: "Localhost",
    dialect:'mysql'
});
sequelize.authenticate().then(function(){
    console.log('conectado')
}).catch(function(error){
    console.log('error'+error)
})
module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize
};
