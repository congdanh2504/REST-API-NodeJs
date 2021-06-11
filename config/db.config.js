const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'student'
});

dbConn.connect(function(err){
    if (err) throw Error('ERR');
    console.log('Database connected successfully');
});

module.exports = dbConn;