// Express para fazer roteamento

const express = require('express');
const ejs = require('ejs');
const porta = 3000;


var app = express();

app.set('view engine','ejs');

// Home 
app.get('/', function(req, res){
    response.send('<h1>Home</h1>');
});

// Produtos
app.get('/produtos', function(req, res) {

    var produto = 'Produtos bacanas';
    var arrProd = ['Livro Node', 'Livro JS', 'Livro C#'];
    res.render('produtos/lista', {
        arrProd : arrProd
    });
});

// Listen
app.listen(porta, function() {
    console.log('Servidor subiu com sucesso!')
});

console.log('teste');
