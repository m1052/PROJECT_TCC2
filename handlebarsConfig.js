const handlebars = require('express-handlebars');
const hnd = handlebars.create({
    defaultLayout: 'main',
    helpers: {
        eachUniqueSit: (array, options) => {
            // this is used for the lookup
            var dupCheck = {};
            // template buffer
            var buffer = '';
            for (var i = 0; i < array.length; i++) {
                var entry = array[i];
                var uniqueKey = entry.idSit
                // check if the entry has been added already
                if (!dupCheck[uniqueKey]) {
                    // here there are only unique values
                    dupCheck[uniqueKey] = true;
                    // add this in the template
                    buffer += options.fn(entry);
                }
            }
            // return the template compiled
            return buffer;
        },
        eachUniqueRel: (array, options) => {
            // this is used for the lookup
            var dupCheck = {};
            // template buffer
            var buffer = '';
            for (var i = 0; i < array.length; i++) {
                var entry = array[i];
                var uniqueKey = entry.idRel
                // check if the entry has been added already
                if (!dupCheck[uniqueKey]) {
                    // here there are only unique values
                    dupCheck[uniqueKey] = true;
                    // add this in the template
                    buffer += options.fn(entry);
                }
            }
            // return the template compiled
            return buffer;
        }

    },
    eachUniqueAco: (array, options) => {
        // this is used for the lookup
        var dupCheck = {};
        // template buffer
        var buffer = '';
        for (var i = 0; i < array.length; i++) {
            var entry = array[i];
            var uniqueKey = entry.ACODIGO
            // check if the entry has been added already
            if (!dupCheck[uniqueKey]) {
                // here there are only unique values
                dupCheck[uniqueKey] = true;
                // add this in the template
                buffer += options.fn(entry);
            }
        }
        // return the template compiled
        return buffer;
    }


  
})
module.exports = {
    hnd,
}