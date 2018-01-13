const mysql = require('mysql');

function connectionFactory() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'caelum',
        database: 'casadocodigo'
    });
}

module.exports = () => connectionFactory;