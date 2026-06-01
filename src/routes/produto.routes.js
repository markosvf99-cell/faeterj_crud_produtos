import produtoController from "../controllers/produto.controller.js";
import { Router } from "express";

const produtoRouter = Router();

produtoRouter.get("/produtos", produtoController.findAllProdutoController);
produtoRouter.get("/produtos/:id",produtoController.findprodutobyidcontroller);
produtoRouter.post("/produtos", produtoController.createProdutoController);

export default produtoRouter;
