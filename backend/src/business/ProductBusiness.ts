import { ProductDatabase } from "../database/ProductDatabase";
import { NotFoundError } from "../errors/NotFoundError";
import { ParamsError } from "../errors/ParamsError";
import { IProductDB } from "../models/Product";

export class ProductBusiness {
    constructor(
        private productsDatabase: ProductDatabase
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

    public editProduct = async (input: any) =>{
        const { name} = input
    
        const id = Number(input.id)
        const price = Number(input.price)
        const qty_stock = Number(input.qty_stock)
    
    
        if (!id || id === NaN) {
            throw new ParamsError() 
        }
    
        if (!price || price === NaN) {
            throw new ParamsError() 
        }
    
        if (!qty_stock || qty_stock === NaN) {
            throw new ParamsError() 
        }

        if (!name) {
            throw new ParamsError() 
        }
    
        const product = await this.productsDatabase.selectProductById(id)
    
        if(!product) {
            throw new NotFoundError("Produto informado não encontrado")
        }
    
        const editedProduct: IProductDB = {
            id,
            name,
            price,
            qty_stock 
        }

        await this.productsDatabase.updateProductInfo(editedProduct)
    
        const response = {
            message: "Informações do produto atualizadas"
        }
    
        return response
    }
}