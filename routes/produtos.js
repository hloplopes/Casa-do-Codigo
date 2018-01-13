module.exports = function(app) {
        app.get('/produtos', function(req, res) {

            const connection = app.infra.connectionFactory();
            const produtosDAO = new app.DAO.ProdutosDAO(connection);

            produtosDAO.lista(function(err, result) {

                res.formart({
                    html: () => res.render('produtos/lista', {
                        produtos : result
                    }),
                    json: () => res.json('produtos/lista', {result})
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

                const connection = app.infra.connectionFactory();
                const produtosDAO = new app.DAO.ProdutosDAO(connection);
    
                produtosDAO.salva(produto, function(err) {
                    res.redirect('/produtos');
                });
            }

        });
}