import produtoService from "../services/produto.service.js";
import { response } from "express";

async function findAllProdutoController(request, response) {
  try {
    const produto = await produtoService.findAllProdutoService();
    response.status(200).send(produtos);
  } catch (error) {
    response.status(404).send(error.message);
  }
}
export default {
  findAllProdutoController,
};
