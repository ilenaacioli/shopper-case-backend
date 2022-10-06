import { OrderDatabase } from "../database/OrderDatabase";
import { ProductDatabase } from "../database/ProductDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { RequestError} from "../errors/RequestError"
import { ParamsError } from "../errors/ParamsError";


export class OrderBusiness {
    constructor(
        private orderDatabase: OrderDatabase,
        private productDatabase: ProductDatabase,
        private idGenerator: IdGenerator
    ) {}

    public createAnOrder = async (input: any) =>{
        const {products, userName, deliveryDate} = input

        if (products.length ===0 ){
            throw new ParamsError("Pedido vazio! informe pelo menos um produto")
        }

        if (!userName ){
            throw new ParamsError("Informe seu nome!")
        }

        if(new(deliveryDate) < new Date()) {
            throw new ParamsError("Data inválida, informe uma data futura")
        }

        const id = this.idGenerator.generate()
        
        await this.orderDatabase.insertOrder(id, userName, deliveryDate)

        let totalPriceOrder = 0

        for (const product of products) {
           
                const productInfo = await this.productDatabase.selectProductById(product.id)

                if(productInfo.qty_stock < product.quantity){
                    throw new RequestError(`A quantidade pedida para o produto ${product.id}-${productInfo.name} está indisponível no momento`)
                }

                const totalPriceItem = productInfo.price * product.quantity
                await this.orderDatabase.insertOrderItem(id, userName, product.id, product.quantity, totalPriceItem )

                const newQuantityStock = productInfo.qty_stock - product.quantity
                await this.productDatabase.updateStockOfProduct(product.id, newQuantityStock)

                totalPriceOrder = totalPriceOrder + totalPriceItem 
        }

        await this.orderDatabase.updateTotalPriceOrder(id, totalPriceOrder)

        const response = {
            message: "pedido concluído com sucesso!",
        }

        return response
    }

}