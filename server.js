const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { hnd } = require('./handlebarsConfig');
//static path
app.use(express.static(path.join(__dirname, "static")))
//handlebars
app.engine('handlebars', hnd.engine)
app.set('view engine', 'handlebars')
//routers
app.use('/', require('./routes/PostRoutes'));
//server
app.listen(port, () => {

    console.log("Rodandado na porta: " + port)

});
