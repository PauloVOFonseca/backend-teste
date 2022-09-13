import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProdutoModel } from "./produto.model";

@Controller('produtos')
export class ProdutosController {
    produtos: ProdutoModel[] = [
        new ProdutoModel("LIV001", "LIVRO NODE1", 10.29),
        new ProdutoModel("LIV002", "LIVRO FLUTTER", 13.29),
        new ProdutoModel("LIV003", "LIVRO JAVA", 16.29),
    ]
    @Get()
    obterTodos(): ProdutoModel[] {
        return this.produtos;
    }

    @Get(':id')
    obterUm(@Param() params): ProdutoModel {
        return this.produtos[0];
    }

    @Post()
    criar(@Body() produto: ProdutoModel) {
        produto.id = 100;
        this.produtos.push(produto);
    }

    @Put()
    alterar(@Body() produto: ProdutoModel): ProdutoModel {
        return produto;
    }

    @Delete(':id')
    apagar(@Param() params) {
        this.produtos.pop;
    }
}