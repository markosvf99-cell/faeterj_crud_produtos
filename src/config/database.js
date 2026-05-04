import sqlite3 from "sqlite3";

const db = new sqlite3.database('database.sqlite', (error) => { 
        if(error){
            console.log("erro ao conectar ao banco de dados: " , error.message);
        }
        else {
            console.log("conectar ao banco de dados com susseso.");
        }
 }
);

export default db;