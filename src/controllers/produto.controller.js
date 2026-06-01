import produtoService from "../services/produto.service.js";
import { response } from "express";

async function findAllProdutoController(request, response) {
  try {
    const produtos = await produtoService.findAllProdutosService();
    response.status(200).send(produtos);
  } catch (error) {
    response.status(404).send(error.message);
  }
}

async function findprodutobyidcontroller(request, response) {
  const{id} = request.params;

  try {
    const produto = await produtoService.
    findprodutoByidservice(id);
    response.status(200).send({produto});
  } catch (error) {
    response.status(404).send(error.message);
  }
}

async function createProdutoController(request, response){
  const novoproduto = request.body;

  try {
    const produto = await produtoService.createProdutoService(novoproduto);
    response.status(201).send(produto);
  } catch (error) {
    response.status(404).send(error.message);
  }
}
export default {
  findAllProdutoController,
  findprodutobyidcontroller,
  createProdutoController
}
