
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Test = new Schema({
    x: String,
    j: String
});

mongoose.model('Test', Test);

Test = mongoose.model('Test');
var test = new Test;
console.log('!');
