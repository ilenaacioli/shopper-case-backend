import { ProductDatabase } from "../database/ProductDatabase";
import { NotFoundError } from "../errors/NotFoundError";
import { ParamsError } from "../errors/ParamsError";
import { IdGenerator } from "../services/IdGenerator"

export class ProductBusiness {
    constructor(
        private productsDatabase: ProductDatabase,
        private idGenerator: IdGenerator
    ) {}

    public getProducts = async () =>{
        const products = await this.productsDatabase.selectProducts()

        const response = {
            products: products
        }

        return response
    }

    public getProductById = async (input: any) =>{
        const id = Number(input.id)

        if (!id || id === NaN) {
            throw new ParamsError() 
        }

        const product = await this.productsDatabase.selectProductById(id)

        if(!product) {
            throw new NotFoundError()
        }

        const response = {
            product: product
        }

        return response
    }
}