// roteamento

const http = require('http');
const porta = 8080;
const ip = 'localhost';


var server = http.createServer(function(req, res) {

    var rotas = [];
    rotas['/'] = '<h1>Home</h1>';
    rotas['/produtos'] = '<h1>Produtos</h1>';

    if(rotas[req.url]) {
        res.end(rotas[req.url]);
        
    } 
    else {
        res.writeHead(404);
        res.end('Erro 404');
    }
});

server.listen(porta,ip, function(){
    console.log('Servidor inicializado com sucesso');
});

