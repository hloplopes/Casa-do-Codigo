class ProdutosDAO {

    constructor(connection) {
        this._connection = connection;
    }

    lista(cb) {
        this._connection.query('SELECT * FROM Produtos', cb);
    }

}

module.exports = ProdutosDAO;