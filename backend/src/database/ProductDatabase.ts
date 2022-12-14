import { IProductDB } from "../models/Product";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
    public static TABLE_PRODUCTS = "shopper_products"

    public selectProducts = async () =>{
        const result = await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCTS)
        .select("*")

        return result
    }

    public selectProductById = async (id:number) =>{
        const result = await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCTS)
        .select("*")
        .where({
            id
        })

        return result[0]
    }

    public updateStockOfProduct = async (id:number, newQuantity: number) => {
        await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCTS)
        .update({
            qty_stock: newQuantity
        })
        .where({
            id
        })
    }

    public updateProductInfo = async (product: IProductDB) => {
        await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCTS)
        .update({
            name: product.name,
            price: product.price,
            qty_stock: product.qty_stock
        })
        .where({
            id: product.id,
        })
    }
}