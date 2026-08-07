export class Biblioteca {
    private codigo: string;
    private titulo: string;
    private quantidade: number;

    constructor(codigo: string, titulo: string, quantidade: number) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.quantidade = quantidade;
    }

    // Adiciona exemplares
    adicionarExemplares(qtd: number): boolean {
        if (qtd > 0) {
            this.quantidade += qtd;
            return true;
        }
        return false;
    }

    // Empresta exemplares
    emprestar(qtd: number): boolean {
        if (qtd > 0 && this.quantidade >= qtd) {
            this.quantidade -= qtd;
            return true;
        }
        return false;
    }
     getCodigo(): string {
       return this.codigo;
     }
    // Retorna a quantidade atual
    getQuantidade(): number {
        return this.quantidade;
    }

    // Atualiza o título
    setTitulo(novoTitulo: string): void {
        this.titulo = novoTitulo;
    }

    // Apresenta os dados do livro
    apresentarDados(): void {
        console.log(`${this.codigo} ${this.titulo}`);
    }
}