module.exports = function(app) {
        app.get('/produtos', function(req, res) {
            var produto = 'Produtos bacanas';
            var arrProd = ['Livro Node', 'Livro JS', 'Livro C#'];
            res.render('produtos/lista', {
                arrProd : arrProd
            });
        });
}