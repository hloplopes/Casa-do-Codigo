class ProdutosDAO {

    constructor(connection) {
        this._connection = connection;
    }

    lista(cb) {
        this._connection.query('SELECT * FROM Produtos', cb);
    }

    salva(obj, cb) {
        this._connection.query('INSERT INTO Produtos SET ?', obj, cb);
    }

}

module.exports = ProdutosDAO;