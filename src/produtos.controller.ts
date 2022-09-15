import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProdutoModel } from "./produto.model";
import { ProdutosService } from "./produtos.service";

@Controller('produtos')
export class ProdutosController {
    constructor(private produtosService: ProdutosService) {

    }

    @Get()
    obterTodos(): ProdutoModel[] {
        return this.produtosService.obterTodos();
    }

    @Get(':id')
    obterUm(@Param() params): ProdutoModel {
        return this.produtosService.obterUm(params.id);
    }

    @Post()
    criar(@Body() produto: ProdutoModel) {
        produto.id = 100;
        this.produtosService.criar(produto);
    }

    @Put()
    alterar(@Body() produto: ProdutoModel): ProdutoModel {
        return this.produtosService.alterar(produto);
    }

    @Delete(':id')
    apagar(@Param() params) {
        this.produtosService.apagar(params.id);
    }
}