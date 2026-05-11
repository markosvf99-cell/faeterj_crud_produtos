import express from "express";
import produtoRouter from "./src/routes/produto.routes.js";

const app = express();

app.use(express.json());
app.use(produtoRouter);

app.listen(3000, () => {
  console.log("servidor rodando na porta 3000....");
});
