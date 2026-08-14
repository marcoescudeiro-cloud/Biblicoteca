import { Biblioteca } from "./Biblioteca";

const livro = new Biblioteca("L001", "TypeScript Básico", 0);
livro.apresentarDados();
console.log("Quantidade:", livro.getQuantidade());

if (livro.adicionarExemplares(5)) {
    console.log("Exemplares adicionados com sucesso!");
} else {
    console.log("Não foi possível adicionar exemplares.");
}

console.log("Quantidade:", livro.getQuantidade());

if (livro.adicionarExemplares(-2)) {
    console.log("Exemplares adicionados com sucesso!");
} else {
    console.log("Não foi possível adicionar exemplares.");
}

if (livro.emprestar(3)) {
    console.log("Empréstimo realizado com sucesso!");
} else {
    console.log("Não foi possível realizar o empréstimo.");
}

console.log("Quantidade:", livro.getQuantidade());

if (livro.emprestar(10)) {
    console.log("Empréstimo realizado com sucesso!");
} else {
    console.log("Não foi possível realizar o empréstimo.");
}

console.log("Quantidade:", livro.getQuantidade());

livro.setTitulo("TypeScript Avançado");

livro.apresentarDados();