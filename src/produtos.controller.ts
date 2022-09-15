import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProdutoModel } from "./produto.model";
import { ProdutosService } from "./produtos.service";

@Controller('produtos')
export class ProdutosController {
    constructor(private produtosService: ProdutosService) {

    }

    @Get()
    async obterTodos(): Promise<ProdutoModel[]> {
        return this.produtosService.obterTodos();
    }

    @Get(':id')
    async obterUm(@Param() params): Promise<ProdutoModel> {
        return this.produtosService.obterUm(params.id);
    }

    @Post()
    async criar(@Body() produto: ProdutoModel) {
        this.produtosService.criar(produto);
    }

    @Put()
    async alterar(@Body() produto: ProdutoModel): Promise<[number, ProdutoModel[]]> {
        return this.produtosService.alterar(produto);
    }

    @Delete(':id')
    async apagar(@Param() params) {
        this.produtosService.apagar(params.id);
    }
}