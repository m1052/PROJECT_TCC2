const localStrategy = require('passport-local').localStrategy
const bcrypt = require('bcryptjs')
const dbusuario = require('./database/dbusuario')
function passport(passport) {
    passport.use(new localStrategy({ usernameField: 'email' }), (email, senha, done) => {
        dbusuario.fidUserByEmail(email).then((usuario) => {
            if (!usuario) {
                return done(null, false, { message: "essa conta não existe" })
            }
            bcrypt.compare(senha,usuario.senha,(erro,batem)=>{
                if(batem){
                    return done(null,usuario)
                }else{
                    return done(null,false,{message: "senha incorreta"})

                }
                

            })
        })
    })

passport.serializeUser((usuario,done)=>{
    done(null, usuario.idUSUARIO)
})
passport.deserializeUser((idUSUARIO,done)=>{
dbusuario.findUserByID(id,(erro,usuario)=>{
    done(erro,usuario)
})
})

}
module.exports = {
    passport
}