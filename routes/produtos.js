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

        app.get('/produtos/cadastro', function(req, res) {
            res.render('produtos/form');
        });

        app.post('/produtos', function(req, res) {

            const produto = req.body;

            req.assert('titulo','Titulo e obrigatorio!').notEmpty();
            req.assert('preco', 'Preco deve ser um numero').isFloat();

            const erros = req.validationErrors();

            if(erros) {
                res.send(erros);
            } else {

                const connection = connectionFactory();
                const produtosDAO = new ProdutosDAO(connection);
    
                produtosDAO.salva(produto, function(err) {
                    res.redirect('/produtos');
                });
            }

        });
}