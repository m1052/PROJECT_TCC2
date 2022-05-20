const db = require('./db')
exports.getAcoCod = async function (PARM){
    const getAco = await db.main('ACO','ACODIGO',PARM)
    //console.log(getAco)
}
exports.getAcoAll = async function (){
    const getAco = await db.main('ACO','1','1')
   // console.log(getAco)

}
//getAcoAll()
 