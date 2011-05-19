
var mongoose = require('mongoose'),
    sys      = require('sys');

module.exports = function(app) {
    
    var BP = mongoose.model('BlogPost');

    app.all('*', function(req, res, next) {
        // Could run init code here.
        next();
    });

    app.get('/', function(req, res){
        res.render('index', { a: (new Date).getTime() });
    });

    app.get('/add', function(req, res){
        var bp = new BP;
        bp.author = 'Luis';
        bp.save(function(e) {
            if (!e) {
                res.send('added');
            } else {
                res.send(sys.inspect(e));
            }
        });
    });

    app.get('/list', function(req, res){
        BP.find({}, function(e, data) {
            if (!e) {
                res.send(sys.inspect(data));
            } else {
                res.send(sys.inspect(e));
                console.log(e);
            }
        });
    });

    app.get('/clear', function(req, res){
        BP.remove({}, function() {
            BP.find({}, function(e, data) {
                res.send(sys.inspect(data));
            });
        });
    });
};
