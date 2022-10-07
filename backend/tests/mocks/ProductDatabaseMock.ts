import { BaseDatabase } from "../../src/database/BaseDatabase";
import { IProductDB } from "../../src/models/Product"

export class ProductDatabaseMock extends BaseDatabase {
    public static TABLE_PRODUCTS = "shopper_products"

    public selectProducts = async (): Promise<IProductDB[]> => {

        const products: IProductDB[] = [
            {
                id: 16,
                name: "AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML",
                price: 20.49,
                qty_stock: 158
            },
            {
                id: 18,
                name: "BEBIDA ENERGÉTICA VIBE 2L",
                price: 8.99,
                qty_stock: 659
            },
            {
                id: 19,
                name: "ENERGÉTICO RED BULL ENERGY DRINK 250ML",
                price: 7.29,
                qty_stock: 909
            }

        ]

        return products
    }

    public selectProductById = async (id: number) : Promise<IProductDB | undefined> => {

        switch(id) {
            case 16:
                return  {
                    id: 16,
                    name: "AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML",
                    price: 20.49,
                    qty_stock: 158
                }

            default:
                return undefined
        }

        
    }

    public updateStockOfProduct = async (id: number, newQuantity: number): Promise<void>=> {
    }
}