module.exports = function(app) {
        app.get('/produtos', function(req, res) {

            const mysql = require('mysql');
            var connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: 'caelum',
                database: 'casadocodigo'
            });

            connection.query('SELECT * FROM Produtos', function(err, result) {

                console.log(result)
                res.render('produtos/lista', {
                    produtos : result
                });

            });

        });
}