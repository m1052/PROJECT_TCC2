const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { hnd } = require('./handlebarsConfig');
//static pathna
app.use(express.static(path.join(__dirname, "static")))
//handlebars
app.engine('handlebars', hnd.engine)
app.set('view engine', 'handlebars')
//routers
app.use('/usuario', require('./routes/usuario/UPostRoutes'));
app.use('/', require('./routes/PostRoutesMain'));
app.use('/admin', require('./routes/admin/admroutes'))
//server
app.listen(port, () => {

    console.log("Rodandado na porta: " + port)

});
