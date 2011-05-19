
var fs = require('fs');

fs.readdir('../', function(e, files) {
    console.log(files);
    for (var f in files) {
        fs.stat('../' + files[f], function (er, s) {
            console.log(er, s.isDirectory());   
        });
    }
});
