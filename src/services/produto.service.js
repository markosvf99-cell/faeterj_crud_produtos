import produtoRepository from "../repositories/produto.repository.js";

async function findAllProdutosService() {
    const produtos = await produtoRepository.findAllProdutorepository();
    return produtos;
}

export default { 
    findAllProdutosService 
};