const handlebars = require('express-handlebars');
const express = require('express');
const app = express();
const port = 3000;
//handlebars

app.engine('handlebars', handlebars.engine({defaultLayout:'main'}))
app.set('view engine', 'handlebars')
//router
app.use('/',require('./api/routes/PostRoutes'));
//server
app.listen(port, () =>{

console.log("Rodandado na porta: "+port)

});