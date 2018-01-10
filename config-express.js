const express = require('express');
var app = express();
const ejs = require('ejs');

// Setando a view Engine
app.set('view engine','ejs');

// Setando a middleware

app.use(express.static('./public'));

// Setando a rota de produtos
var produtos = require('./routes/produtos.js');
produtos(app);

// Setando a rota da home
require('./routes/home.js')(app);

module.exports = app