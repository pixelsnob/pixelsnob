
var express  = require('express'),
    app      = express.createServer(),
    mongoose = require('mongoose'),
    jqtpl    = require('jqtpl'),
    models   = require('./models'),
    sys      = require('sys'),
    db;

var db = mongoose.connect('mongodb://localhost/test', function(e) {
    if (e) {
        console.log('Mongoose connect error: ' + e.message);
        process.exit(1);
    }
});

app.dynamicHelpers({
    test: function() {
        return { a: 'a', b: 'b' };
    }
});

app.configure(function(){
    app.set('view engine', 'html');
    app.register('.html', jqtpl.express);
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(express.session({ secret: 'baby' }));
    app.use(express.errorHandler({ showStack: true, dumpExceptions: true }));
    //app.use(express.logger());
});

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
});

require('./model');
require('./routes')(app);

app.listen(3000);

