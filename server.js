const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser')
const { hnd } = require('./handlebarsConfig');
const session = require('express-session');
//const passport = require('./auth')
//sessao
app.use(session({
    secret: "H3f4stoSistemSolda@123",
    resave: true,
    saveUninitialized: true
}))
//passport
//app.use(passport.initialize())
//static path
app.use(express.static(path.join(__dirname, "static")))
//handlebars
app.engine('handlebars', hnd.engine)
app.set('view engine', 'handlebars')
//body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//routers
app.use('/usuario', require('./routes/usuario/UPostRoutes'));
app.use('/', require('./routes/PostRoutesMain'));
app.use('/admin', require('./routes/admin/admroutes'))
//server
app.listen(port, () => {

    console.log("Rodandado na porta: " + port)

});
