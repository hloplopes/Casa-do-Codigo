module.exports = function(app) {
    app.get('/', function(req, res){
        response.send('<h1>Home</h1>');
    });
}

