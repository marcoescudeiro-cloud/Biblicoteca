import { Biblioteca } from "./Biblioteca";

// Criação do livro com quantidade inicial igual a 0
const livro = new Biblioteca("L001", "TypeScript Básico", 0);

// Dados iniciais
livro.apresentarDados();
console.log("Quantidade:", livro.getQuantidade());

// Teste de adicionar exemplares
if (livro.adicionarExemplares(5)) {
    console.log("Exemplares adicionados com sucesso!");
} else {
    console.log("Não foi possível adicionar exemplares.");
}

console.log("Quantidade:", livro.getQuantidade());

// Teste inválido
if (livro.adicionarExemplares(-2)) {
    console.log("Exemplares adicionados com sucesso!");
} else {
    console.log("Não foi possível adicionar exemplares.");
}

// Teste de empréstimo
if (livro.emprestar(3)) {
    console.log("Empréstimo realizado com sucesso!");
} else {
    console.log("Não foi possível realizar o empréstimo.");
}

console.log("Quantidade:", livro.getQuantidade());

// Tentativa de emprestar mais do que existe
if (livro.emprestar(10)) {
    console.log("Empréstimo realizado com sucesso!");
} else {
    console.log("Não foi possível realizar o empréstimo.");
}

console.log("Quantidade:", livro.getQuantidade());

// Alteração do título
livro.setTitulo("TypeScript Avançado");

// Exibição dos dados atualizados
livro.apresentarDados();
