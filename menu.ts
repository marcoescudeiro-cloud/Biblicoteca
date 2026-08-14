import promptSync from "prompt-sync";
import { Biblioteca } from "./Biblioteca.ts";

const prompt = promptSync();

let livros: Biblioteca[] = new Array<Biblioteca>();

let opcao: number;
let resposta: boolean;
let tamanho: number;
let codigo: string;
let quantidade: number;
let titulo: string;
let i: number;
let encontrou: boolean;

do {
    console.log("\n===== MENU =====");
    console.log("1 - Cadastrar livro");
    console.log("2 - Listar livros");
    console.log("3 - Adicionar exemplares");
    console.log("4 - Emprestar livro");
    console.log("5 - Alterar título");
    console.log("6 - Sair");

    opcao = Number(prompt("Digite a opção: ")!);

    switch (opcao) {

        case 1:
            codigo = prompt("Código: ")!;
            titulo = prompt("Título: ")!;
            quantidade = Number(prompt("Quantidade: ")!);

            const livro = new Biblioteca(codigo, titulo, quantidade);
            tamanho = livros.push(livro);

            console.log("Livro cadastrado!");
            break;

        case 2:
            if (livros.length == 0) {
                console.log("Nenhum livro cadastrado.");
            } else {
                console.log("\nLista de Livros");
                for (i = 0; i < livros.length; i++) {
                    livros[i].apresentarDados();
                }
            }
            break;

        case 3:
            let codAdicionar = prompt("Código do livro: ")!;
            encontrou = false;

            for (i = 0; i < livros.length; i++) {
                if (livros[i].getCodigo() == codAdicionar) {
                    let qtd = Number(prompt("Quantidade a adicionar: ")!);
                    resposta = livros[i].adicionarExemplares(qtd);
                    if (resposta) {
                        console.log("Exemplares adicionados.");
                    } else {
                        console.log("Quantidade inválida.");
                    }
                    encontrou = true;
                    break;
                }
            }
            if (!encontrou) {
                console.log("Livro não encontrado.");
            }
            break;

        case 4:
            let codEmprestar = prompt("Código do livro: ")!;
            encontrou = false;

            for (i = 0; i < livros.length; i++) {
                if (livros[i].getCodigo() == codEmprestar) {
                    let qtd = Number(prompt("Quantidade para empréstimo: ")!);
                    resposta = livros[i].emprestar(qtd);
                    if (resposta) {
                        console.log("Empréstimo realizado.");
                    } else {
                        console.log("Quantidade insuficiente.");
                    }
                    encontrou = true;
                    break;
                }
            }
            if (!encontrou) {
                console.log("Livro não encontrado.");
            }
            break;

        case 5:
            let codTitulo = prompt("Código do livro: ")!;
            encontrou = false;

            for (i = 0; i < livros.length; i++) {
                if (livros[i].getCodigo() == codTitulo) {
                    let novoTitulo = prompt("Novo título: ")!;
                    livros[i].setTitulo(novoTitulo);
                    console.log("Título alterado.");
                    encontrou = true;
                    break;
                }
            }
            if (!encontrou) {
                console.log("Livro não encontrado.");
            }
            break;

        case 6:
            console.log("Programa encerrado.");
            break;

        default:
            console.log("Opção inválida.");
    }

} while (opcao != 6);
