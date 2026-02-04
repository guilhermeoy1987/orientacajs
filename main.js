// 1. Abstração (Classe Pai)
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

// 2. Herança - Primeira classe filha
class ProdutoVideogame extends Produto {
    constructor(nome, preco, versao) {
        super(nome, preco);
        this.versao = versao;
    }
}

// 2. Herança - Segunda classe filha
class ProdutoAcessorio extends Produto {
    constructor(nome, preco, tamanhoGB) {
        super(nome, preco);
        this.tamanhoGB = tamanhoGB;
    }
}

// 3. Criando as instâncias (Objetos)
const playstation3 = new ProdutoVideogame("PlayStation 3", 800.00, "Completa");
const playstation4 = new ProdutoVideogame("PlayStation 4", 1500.00, "Básica");
const memoryCard = new ProdutoAcessorio("Memory Card", 50.00, "10GB");

// Função para imprimir
function imprimirProduto(produto) {
    const extra = produto.versao || produto.tamanhoGB || "N/A";  
    console.log(`
Nome: ${produto.nome}
Preço: R$ ${produto.preco.toFixed(2)}
Info Extra: ${extra}
---------------------------------------`);
}

console.log("=== PRODUTOS CADASTRADOS ===");
imprimirProduto(playstation3);
imprimirProduto(memoryCard);
imprimirProduto(playstation4);