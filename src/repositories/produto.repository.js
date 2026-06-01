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
        return new Promise((resolve, reject) => {
          db.all("SELECT * FROM produto", (error, rows) => {
            if (error) {
              reject(error);
            } else {
              resolve(rows);
            }
          });
        });
      } 

      function findprodutoByidrepository(id) {
        return new Promise((resolve, reject) => {
          db.get(
            `SELECT
               *
            FROM produto
            WHERE id = ?` ,
            [id],
            (error, row) => {
              if (error) {
                reject(error);
              } else {
                  resolve(row);
              }
            }
          )
        })
      }
      
      function createprodutorepository(novoproduto){
        return new Promise((resolve,reject) =>{
           
          const {
             nome,
             valor,
             tipo 

          }= novoproduto;

          db.run(
            `INSERT INTO produto(nome,valor,tipo)
            VALUES (?,?,?)`,
             [nome,valor,tipo],
             (error) => {
              if (error) {
                reject(error);
              } else {
                resolve({
                  id: this.lastID
                });
              }
             }
            
          );

        });
      }

      function updateProdutoRepository(id, Produtos){
       return new Promise((resolve, reject) => {
        const {
          nome,
          valor,
          tipo
        } = produtos;

        db.run(
          `UPDATE produtos
          SET nome = ?
             valor = ?
             tipo  = ?
          WHERE id = ?`,
          [nome, valor , tipo , id],
          (error) => {
            if (error){
              reject(error);
            } else {
              resolve({
                id,
                ...Produtos
              });
            }
           
          }
        )
       })
      }

      export default {
        findAllProdutorepository,
        findprodutoByidrepository,
        createprodutorepository,
        updateProdutoRepository
        
      };

