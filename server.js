const handlebars = require('express-handlebars');
const express = require('express');
const app = express();
const port = 3000;
const path = require('path')
//static path
app.use(express.static(path.join(__dirname, "static")))
//handlebars
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
//routers
app.use('/', require('./routes/PostRoutes'));
//server
app.listen(port, () => {

    console.log("Rodandado na porta: " + port)

});