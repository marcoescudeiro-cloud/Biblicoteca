export class Biblioteca {

    private codigo: string;
    private titulo: string;
    private quantidade: number;

    constructor(codigo: string, titulo: string, quantidade: number) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.quantidade = quantidade;
    }

    adicionarExemplares(qtd: number): boolean {
        if (qtd > 0) {
            this.quantidade += qtd;
            return true;
        }
        return false;
    }

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

    getQuantidade(): number {
        return this.quantidade;
    }

    setTitulo(novoTitulo: string): void {
        this.titulo = novoTitulo;
    }

    apresentarDados(): void {
        console.log(`${this.codigo} ${this.titulo}`);
    }
}