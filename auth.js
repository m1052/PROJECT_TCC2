const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
const dbusuario = require('./database/dbusuario')


module.exports = function (passport) {
    
    passport.use(new localStrategy({usernameField: 'email', passwordField: 'senha'},(email,senha,done)=>{
        dbusuario.fidUserByEmail(email).then(usuario =>{
            if(!usuario){
                done(null,false,{message: "Essa conta não existe"})
            }
            bcrypt.compare(senha,usuario[0].SENHA,(erro, batem)=>{
                if(batem){
                    return done(null,usuario)
                }else{
                    return done(null,false,{message: "Senha incorreta"})
                }
            })
        })
    }))
    passport.serializeUser((usuario, done) => {
        done(null, usuario[0].idUser);
    });
 
    passport.deserializeUser(async (id, done) => {
        try {
            const user = await dbusuario.findUserByID(id)
            done(null, user);
        } catch (err) {
            done(err, null);
        }
    });

}

/* async function test(){
 dbusuario.fidUserByEmail( 'm@h.com').then(usuario =>{
    console.log(usuario[0].SENHA)
 })

}
test() */