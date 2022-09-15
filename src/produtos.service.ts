import { Injectable } from "@nestjs/common";
import { ProdutoModel } from "./produto.model";

@Injectable()
export class ProdutosService {
    produtos: ProdutoModel[] = [
        new ProdutoModel("LIV001", "LIVRO NODE1", 10.29),
        new ProdutoModel("LIV002", "LIVRO FLUTTER", 13.29),
        new ProdutoModel("LIV003", "LIVRO JAVA", 16.29),
    ]

    obterTodos(): ProdutoModel[] {
        return this.produtos;
    }

    obterUm(id: number): ProdutoModel {
        return this.produtos[0];
    }

    criar(produto: ProdutoModel) {
        this.produtos.push(produto);
    }

    alterar(produto: ProdutoModel): ProdutoModel {
        return produto;
    }

    apagar(id: number){
        this.produtos.pop();
    }
}