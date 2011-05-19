
var express  = require('express'),
    app      = express.createServer(),
    mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    db;

var db = mongoose.connect('mongodb://localhost/test', function() {
    console.log('?');
});

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
});

app.error(function(err, req, res, next) {
    console.log('fuck'); 
});

app.get('/', function(req, res){
});

app.listen(3000);

var TestSchema = new Schema({
    name: String
});

var TestModel = db.model('Test', TestSchema);
var test_model = new TestModel;

test_model.name = 'Yay!';
test_model.save(function(e, f) {
    //console.log(e, f);
});

var TM = db.model('Test');
test_model.find({}, function(r) {
    console.log(r);
});
