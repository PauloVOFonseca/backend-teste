import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { ProdutoModel } from "./produto.model";

@Injectable()
export class ProdutosService {

    constructor(
        @InjectModel(ProdutoModel)
        private produtoModel: typeof ProdutoModel
    ) { }

    async obterTodos(): Promise<ProdutoModel[]> {
        return this.produtoModel.findAll();
    }

    async obterUm(id: number): Promise<ProdutoModel> {
        return this.produtoModel.findByPk(id);
    }

    async criar(produto: ProdutoModel) {
        this.produtoModel.create(produto);
    }

    async alterar(produto: ProdutoModel): Promise<[number, ProdutoModel[]]> {
        return this.produtoModel.update(produto, {
            returning: true,
            where: {
                id: produto.id
            }
        });
    }

    async apagar(id: number) {
        const produto: ProdutoModel = await this.obterUm(id);
        produto.destroy();
    }
}