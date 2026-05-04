import db from "../config/database.js";

db.run(`
    CREATE TABLE IF NOT EXISTS produto (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL UNIQUE,
      valor TEXT NOT NULL,
      tipo TEXT NOT NULL
    )
    `);

    function findAllProdutorepository() {
        `SELECT * FROM produto`
    }