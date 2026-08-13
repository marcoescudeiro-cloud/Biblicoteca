// ===================================================================
// menu.ts
// Programa de CONSOLE (não é página web) que gerencia um acervo de
// livros em memória, usando um array de objetos da classe Biblioteca.
// Passo a passo do que este arquivo faz, de cima para baixo:
//   1) importa as ferramentas necessárias (leitura do teclado + classe)
//   2) declara o vetor de livros e as variáveis auxiliares
//   3) fica em loop mostrando o menu até o usuário escolher "Sair"
//   4) para cada opção escolhida, executa uma ação diferente (switch)
// ===================================================================

// "prompt-sync" é a biblioteca que permite ler o que o usuário digita
// no terminal de forma síncrona (o programa PARA e espera a resposta
// antes de continuar), assim como o Scanner do Java ou input() do Python.
import promptSync from "prompt-sync";

// Importa a classe Biblioteca (o "molde" de cada livro) do outro arquivo.
import { Biblioteca } from "./Biblioteca.ts";

// Cria a função "prompt", que vamos usar toda vez que precisarmos
// perguntar algo ao usuário pelo terminal.
const prompt = promptSync();

// Vetor (array) que guarda todos os livros cadastrados durante a
// execução do programa. Começa vazio e cresce a cada cadastro (push).
let livros: Biblioteca[] = new Array<Biblioteca>();

// ---------------------------------------------------------------
// Variáveis auxiliares usadas dentro do menu:
// ---------------------------------------------------------------
let opcao: number;       // guarda a opção do menu escolhida pelo usuário
let resposta: boolean;   // guarda o retorno (true/false) dos métodos
                          // adicionarExemplares() e emprestar()
let tamanho: number;     // guarda o retorno de livros.push() (novo
                          // tamanho do vetor) — usado no cadastro
let codigo: string       // código do livro digitado no cadastro (opção 1)
let quantidade: number;  // quantidade digitada no cadastro (opção 1)
let titulo: string;      // título digitado no cadastro (opção 1)

// ===================================================================
// Loop principal do menu (do...while)
// Usamos "do...while" (em vez de "while") porque o menu precisa
// aparecer pelo menos UMA vez antes de testarmos a condição de saída
// — a condição só é verificada depois de executar o bloco inteiro.
// O loop se repete até a variável "opcao" ficar igual a 6 (Sair).
// ===================================================================
do {
    // ------------------- Exibe as opções do menu -------------------
    console.log("\n===== MENU =====");
    console.log("1 - Cadastrar livro");
    console.log("2 - Listar livros");
    console.log("3 - Adicionar exemplares");
    console.log("4 - Emprestar livro");
    console.log("5 - Alterar título");
    console.log("6 - Sair");

    // Lê a opção digitada (sempre chega como string) e converte para
    // number com Number(...), pois "opcao" é numérica.
    // O "!" depois do prompt(...) diz ao TypeScript "confie em mim,
    // este valor não vai ser null" (prompt-sync pode retornar null
    // se o usuário apertar Ctrl+D, mas no uso normal isso não ocorre).
    opcao = Number(prompt("Digite a opção: ")!);

    // Decide o que fazer de acordo com o número escolhido.
    switch (opcao) {

        // ============================================================
        // CASE 1 — Cadastrar livro
        // Lê código, título e quantidade, cria um novo objeto
        // Biblioteca com esses dados e adiciona (push) no vetor.
        // ============================================================
        case 1:
            codigo = prompt("Código: ")!;
            titulo = prompt("Título: ")!;
            quantidade = Number(prompt("Quantidade: ")!);

            // Cria o objeto livro usando o construtor da classe Biblioteca.
            const livro = new Biblioteca(codigo, titulo, quantidade);

            // push() adiciona o objeto ao final do vetor "livros" e
            // devolve o novo tamanho do vetor (não usamos esse valor,
            // só guardamos em "tamanho" a título de exemplo).
            tamanho =  livros.push(livro);

            console.log("Livro cadastrado!");
            break;

        // ============================================================
        // CASE 2 — Listar livros
        // Se o vetor estiver vazio, avisa o usuário. Caso contrário,
        // percorre todos os livros com for...of e chama
        // apresentarDados() em cada um, para imprimir código e título.
        // ============================================================
        case 2:
            if (livros.length == 0) {
                console.log("Nenhum livro cadastrado.");
            } else {
                console.log("\nLista de Livros");
                for (let livro of livros) {
                    livro.apresentarDados();
                }
            }
            break;

        // ============================================================
        // CASE 3 — Adicionar exemplares
        // Aqui aparece o "padrão de busca por código", que se repete
        // nos cases 3, 4 e 5:
        //   a) pergunta o código do livro
        //   b) percorre o vetor com for...of comparando os códigos
        //   c) quando encontra, executa a ação e marca encontrou = true
        //   d) break sai do for assim que encontra (não precisa
        //      continuar procurando)
        //   e) se o for terminar sem achar, encontrou continua false
        //      e o usuário é avisado que o livro não existe
        // ============================================================
        case 3:
            let codAdicionar = prompt("Código do livro: ")!;

            // "encontrou" é declarada com "let" aqui porque é a
            // primeira vez que aparece no switch. Nos cases 4 e 5,
            // ela só é REATRIBUÍDA (sem "let"), pois "let" não pode
            // declarar a mesma variável duas vezes dentro do mesmo
            // bloco (o switch inteiro é um único bloco).
            let encontrou = false;

            for (let livro of livros) {
                if (livro.getCodigo() == codAdicionar) {
                    // Achou o livro certo: pergunta quantos exemplares
                    // adicionar e chama o método da classe.
                    let qtd = Number(prompt("Quantidade a adicionar: ")!);
                   resposta = livro.adicionarExemplares(qtd);
                    if (resposta) {
                        console.log("Exemplares adicionados.");
                    } else {
                        console.log("Quantidade inválida.");
                    }
                    encontrou = true;
                    break; // já achou e já tratou: não precisa continuar o for
                }
            }
            if (!encontrou) {
                console.log("Livro não encontrado.");
            }
            break;

        // ============================================================
        // CASE 4 — Emprestar livro
        // Mesmíssimo padrão de busca do case 3, mudando apenas a
        // pergunta feita e o método chamado (emprestar() em vez de
        // adicionarExemplares()).
        // ============================================================
        case 4:
            let codEmprestar = prompt("Código do livro: ")!;
            encontrou = false; // reaproveita a variável "encontrou" do case 3
            for (let livro of livros) {
                if (livro.getCodigo() == codEmprestar) {
                    let qtd = Number(prompt("Quantidade para empréstimo: ")!);
                    resposta = livro.emprestar(qtd);
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

        // ============================================================
        // CASE 5 — Alterar título
        // De novo o mesmo padrão de busca, mas desta vez, ao encontrar
        // o livro, pergunta o novo título e chama setTitulo().
        // ============================================================
        case 5:
            let codTitulo = prompt("Código do livro: ")!;
            encontrou = false;
            for (let livro of livros) {
                if (livro.getCodigo() == codTitulo) {
                    let novoTitulo = prompt("Novo título: ")!;
                    livro.setTitulo(novoTitulo);
                    console.log("Título alterado.");
                    encontrou = true;
                    break;
                }
            }
            if (!encontrou) {
                console.log("Livro não encontrado.");
            }
            break;

        // ============================================================
        // CASE 6 — Sair
        // Não faz nenhuma operação sobre os livros — apenas avisa que
        // o programa vai encerrar. Quem realmente encerra o loop é a
        // condição "while (opcao != 6)" lá embaixo.
        // ============================================================
        case 6:
            console.log("Programa encerrado.");
            break;

        // ============================================================
        // DEFAULT — Qualquer outra opção digitada (ex: 7, 0, letras)
        // cai aqui, avisando que a opção é inválida.
        // ============================================================
        default:
            console.log("Opção inválida.");
    }

// Enquanto a opção escolhida for diferente de 6, volta para o início
// do do...while e mostra o menu de novo.
} while (opcao != 6);
