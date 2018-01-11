module.exports = function(app) {
        app.get('/produtos', function(req, res) {

            const connection = require('../infra/connectionFactory')();

            connection.query('SELECT * FROM Produtos', function(err, result) {
                res.render('produtos/lista', {
                    produtos : result
                });
            });

            connection.end();

        });
}