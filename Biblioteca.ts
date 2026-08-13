// ===================================================================
// Classe Biblioteca
// Representa UM livro do acervo (o nome da classe é "Biblioteca",
// mas cada objeto criado a partir dela é, na prática, um "livro").
// ===================================================================
export class Biblioteca {

    // ---------------------------------------------------------------
    // Atributos (dados que cada objeto/livro vai guardar)
    // "private" significa que só pode ser lido/alterado por dentro
    // da própria classe — por isso existem os métodos get/set abaixo
    // para acessar esses dados de fora da classe.
    // ---------------------------------------------------------------
    private codigo: string;      // identificador único do livro, ex: "L001"
    private titulo: string;      // nome do livro, ex: "TypeScript Básico"
    private quantidade: number;  // quantos exemplares existem em estoque

    // ---------------------------------------------------------------
    // Construtor: é executado automaticamente quando fazemos
    // "new Biblioteca(...)". Recebe os três dados iniciais do livro
    // e guarda cada um deles no atributo correspondente (this.xxx).
    // ---------------------------------------------------------------
    constructor(codigo: string, titulo: string, quantidade: number) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.quantidade = quantidade;
    }

    // ---------------------------------------------------------------
    // adicionarExemplares(qtd)
    // Aumenta o estoque do livro em "qtd" unidades.
    // Só aceita valores positivos (não faz sentido adicionar 0 ou
    // menos exemplares) — por isso valida antes de somar.
    // Retorna true se conseguiu adicionar, false se a quantidade
    // informada era inválida.
    // ---------------------------------------------------------------
    adicionarExemplares(qtd: number): boolean {
        if (qtd > 0) {
            this.quantidade += qtd; // soma a quantidade recebida ao estoque atual
            return true;
        }
        return false; // qtd zero ou negativa: operação recusada
    }

    // ---------------------------------------------------------------
    // emprestar(qtd)
    // Diminui o estoque em "qtd" unidades, simulando um empréstimo.
    // Só permite emprestar se:
    //   1) a quantidade pedida for positiva, e
    //   2) houver exemplares suficientes em estoque (this.quantidade >= qtd)
    // Retorna true se o empréstimo foi realizado, false caso contrário.
    // ---------------------------------------------------------------
    emprestar(qtd: number): boolean {
        if (qtd > 0 && this.quantidade >= qtd) {
            this.quantidade -= qtd; // retira a quantidade emprestada do estoque
            return true;
        }
        return false; // pedido inválido ou estoque insuficiente
    }

    // ---------------------------------------------------------------
    // getCodigo()
    // "Getter": devolve o código do livro para quem chamar de fora
    // da classe. É assim que o menu.ts consegue comparar o código
    // digitado pelo usuário com o código de cada livro do vetor.
    // ---------------------------------------------------------------
    getCodigo(): string {
        return this.codigo;
    }

    // ---------------------------------------------------------------
    // getQuantidade()
    // "Getter": devolve a quantidade atual em estoque.
    // ---------------------------------------------------------------
    getQuantidade(): number {
        return this.quantidade;
    }

    // ---------------------------------------------------------------
    // setTitulo(novoTitulo)
    // "Setter": permite alterar o título do livro depois que ele já
    // foi criado (usado na opção "5 - Alterar título" do menu).
    // Não retorna nada (void).
    // ---------------------------------------------------------------
    setTitulo(novoTitulo: string): void {
        this.titulo = novoTitulo;
    }

    // ---------------------------------------------------------------
    // apresentarDados()
    // Imprime no console o código e o título do livro, no formato
    // "CODIGO TITULO". É o método usado na opção "2 - Listar livros".
    // ---------------------------------------------------------------
    apresentarDados(): void {
        console.log(`${this.codigo} ${this.titulo}`);
    }
}
