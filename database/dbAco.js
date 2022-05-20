const acoGetAll = require('../database/db')
const teste = async function(){
   const aux = await acoGetAll.getAcoAll()
    return aux
}
console.log(teste)
