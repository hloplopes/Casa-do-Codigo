// Importacao de Libs
const ProdutosDAO = require('../DAO/ProdutosDAO');
const connectionFactory = require('../infra/connectionFactory')

module.exports = function(app) {
        app.get('/produtos', function(req, res) {

            const connection = connectionFactory();
            const produtosDAO = new ProdutosDAO(connection);

            produtosDAO.lista(function(err, result) {
                res.render('produtos/lista', {
                    produtos : result
                });
            });

        });
}