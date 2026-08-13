// ===================================================================
// bibliotecaTest.ts
// Script simples de teste "manual" da classe Biblioteca — sem menu,
// sem prompt-sync, só chamando os métodos direto no código e
// observando as mensagens impressas no console. Serve para conferir
// se a classe está se comportando como esperado antes de usá-la
// dentro do menu interativo.
// ===================================================================

import { Biblioteca } from "./Biblioteca";

// Cria um livro de teste com quantidade inicial igual a 0.
const livro = new Biblioteca("L001", "TypeScript Básico", 0);

// ------------------- 1) Estado inicial -------------------
// Mostra código/título (apresentarDados) e a quantidade atual (0).
livro.apresentarDados();
console.log("Quantidade:", livro.getQuantidade());

// ------------------- 2) Teste de adicionarExemplares (caso válido) -------------------
// Adiciona 5 exemplares; como 5 > 0, o método deve retornar true.
if (livro.adicionarExemplares(5)) {
    console.log("Exemplares adicionados com sucesso!");
} else {
    console.log("Não foi possível adicionar exemplares.");
}

// Quantidade esperada aqui: 0 + 5 = 5
console.log("Quantidade:", livro.getQuantidade());

// ------------------- 3) Teste de adicionarExemplares (caso inválido) -------------------
// Tenta adicionar -2 exemplares; como -2 não é > 0, o método deve
// retornar false e a quantidade NÃO deve mudar (continua 5).
if (livro.adicionarExemplares(-2)) {
    console.log("Exemplares adicionados com sucesso!");
} else {
    console.log("Não foi possível adicionar exemplares.");
}

// ------------------- 4) Teste de emprestar (caso válido) -------------------
// Empresta 3 unidades; como há 5 em estoque, deve funcionar e
// retornar true.
if (livro.emprestar(3)) {
    console.log("Empréstimo realizado com sucesso!");
} else {
    console.log("Não foi possível realizar o empréstimo.");
}

// Quantidade esperada aqui: 5 - 3 = 2
console.log("Quantidade:", livro.getQuantidade());

// ------------------- 5) Teste de emprestar (caso inválido) -------------------
// Tenta emprestar 10, mas só há 2 em estoque — o método deve
// recusar (retornar false) e a quantidade continua 2.
if (livro.emprestar(10)) {
    console.log("Empréstimo realizado com sucesso!");
} else {
    console.log("Não foi possível realizar o empréstimo.");
}

// Confirma que a quantidade continua 2 (o empréstimo inválido não
// alterou o estoque).
console.log("Quantidade:", livro.getQuantidade());

// ------------------- 6) Teste de setTitulo -------------------
// Altera o título do livro (não tem validação, sempre funciona).
livro.setTitulo("TypeScript Avançado");

// Mostra os dados atualizados, para confirmar que o título mudou.
livro.apresentarDados();
