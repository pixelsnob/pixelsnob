
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BlogPost = new Schema({
    author    : String
    , title     : String
    , body      : String
    , date      : Date
});

mongoose.model('BlogPost', BlogPost);
