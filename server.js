const handlebars = require('express-handlebars');
const hnd = handlebars.create({
    defaultLayout: 'main',
    helpers:{
        eachUnique: (array,options)=>{
             // this is used for the lookup
      var  dupCheck = {};
      // template buffer
      var buffer = '';
      for( var i=0; i< array.length; i++){
        var entry = array[i];
        var uniqueKey = entry.idSit
        // check if the entry has been added already
        if(!dupCheck[uniqueKey]){
          // here there are only unique values
          dupCheck[uniqueKey] = true;
          // add this in the template
          buffer += options.fn(entry);
        }
      }
      // return the template compiled
      return buffer;
        }
    }

})

const express = require('express');
const app = express();
const port = 3000;
const path = require('path')
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
