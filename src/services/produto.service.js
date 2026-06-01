import produtoRepository from "../repositories/produto.repository.js";

async function findAllProdutosService() {
    const produtos = await produtoRepository.findAllProdutorepository();
    return produtos;
}

async function findprodutoByidservice(id) {
    const produto = await produtoRepository.
    findprodutoByidrepository(id);

    if (!produto) {
        throw new Error("produto não encontrado!");
        
    }

    return produto;
    
}

async function createProdutoService(novoproduto) {
    const produto = await produtoRepository.createprodutorepository
    (novoproduto);

    if (!produto) {
        throw new Error("Erro ao criar novo produto");
    }

    return produto;
    
}

async function updateProdutoService(id, produtosAtualizado) {
    const produto = await produtoRepository.findprodutoByidrepository(id);

    if (!produto) {
        throw new Error("produto não encontrado!");

        const produtoRetorno = await produtoRepository.updateProdutoRepository
        (id, produtoAtualizado);

    if (!produtoRetorno) {
        throw new Error("Erro ao atualizar o produto!");
    }
    }

    return produtoRetorno;
}

export default { 
    findAllProdutosService,
    findprodutoByidservice,
    createProdutoService,
    updateProdutoService
};