
var client = new (require('mysql').Client),

client.user = 'root';
client.port = '/tmp/mysql.sock';
 
client.connect(function(error, results) {
    if (error) {
        console.log('Connection Error: ' + error.message);
        return;
    }
    console.log('Connected to MySQL');
    client.query('use test');
});


client.query('select * from test', function(err, results, fields) {
    res.render('index', { a: process.pid });
});
