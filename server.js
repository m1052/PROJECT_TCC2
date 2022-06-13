const express = require('express');
const app = express();
const port = process.env.PORT;
const path = require('path');
const bodyParser = require('body-parser')
const { hnd } = require('./handlebarsConfig');
const session = require('express-session');
const helpers = require('./helpers')
const flash = require('connect-flash')
const passport = require('passport')
require('./auth')(passport)
app.use(session({
    secret: "H3f4stoSistemSolda@123",
    resave: true,
    saveUninitialized: false
}))
//passport
app.use(passport.initialize());
app.use(passport.session());
//middleware
app.use(flash())
app.use((req, res, next) => {

    res.locals.user = req.user || null
    next()
})
//static path
app.use(express.static(path.join(__dirname, "static")))
//handlebars
app.engine('handlebars', hnd.engine)
app.set('view engine', 'handlebars')
//body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//routers
app.use('/usuario', helpers.auth, require('./routes/usuario/UPostRoutes'));
app.use('/', require('./routes/PostRoutesMain'));
app.use('/admin', helpers.auth,helpers.authAdm, require('./routes/admin/admroutes'))
//server
app.listen(port, () => {

    console.log("Rodandado na porta: " + port)

});
