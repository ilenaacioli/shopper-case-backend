import { OrderDatabase } from "../database/OrderDatabase";
import { ProductDatabase } from "../database/ProductDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { RequestError} from "../errors/RequestError"
import { ParamsError } from "../errors/ParamsError";
import { ICreateOrderInputDTO, IOrderDB, IOrderItemsDB } from "../models/Order";


export class OrderBusiness {
    constructor(
        private orderDatabase: OrderDatabase,
        private productDatabase: ProductDatabase,
        private idGenerator: IdGenerator
    ) {}

    public createAnOrder = async (input: ICreateOrderInputDTO) =>{
        const {products, userName, deliveryDate} = input

        if (products.length ===0 ){
            throw new ParamsError("Pedido vazio! informe pelo menos um produto")
        }

        if (!userName ){
            throw new ParamsError("Informe seu nome!")
        }

        if(new Date(deliveryDate) < new Date()) {
            throw new ParamsError("Data inválida, informe uma data futura")
        }

        const id = this.idGenerator.generate()

        const order: IOrderDB ={
            id: id,
            user_name: userName,
            delivery_date: deliveryDate,
            total_price_order: 0
        }
        
        await this.orderDatabase.insertOrder(order)

        let totalPriceOrder = 0

        for (const product of products) {
           
                const productInfo = await this.productDatabase.selectProductById(product.id)

                if(productInfo.qty_stock < product.quantity){
                    throw new RequestError(`A quantidade pedida para o produto ${product.id}-${productInfo.name} está indisponível no momento`)
                }

                const totalPriceItem = productInfo.price * product.quantity

                const orderItems: IOrderItemsDB = {
                    order_id: id,
                    user_name: userName,
                    product_id: product.id,
                    quantity: product.quantity,
                    total_price_item: totalPriceItem
                }
                await this.orderDatabase.insertOrderItem(orderItems)

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