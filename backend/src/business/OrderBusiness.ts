import { OrderDatabase } from "../database/OrderDatabase";
import { ProductDatabase } from "../database/ProductDatabase";
import { IdGenerator } from "../services/IdGenerator";


export class OrderBusiness {
    constructor(
        private orderDatabase: OrderDatabase,
        private productDatabase: ProductDatabase,
        private idGenerator: IdGenerator
    ) {}

    public createAnOrder = async (input: any) =>{
        const {products, userName, deliveryDate} = input
        const formatDeliveryDate = new Date(deliveryDate)

        const id = this.idGenerator.generate()
        
        await this.orderDatabase.insertOrder(id, userName, formatDeliveryDate)

        let totalPriceOrder = 0

        for (const product of products) {
            try {

                const productInfo = await this.productDatabase.selectProductById(product.id)
                const totalPriceItem = productInfo.price * product.quantity
                await this.orderDatabase.insertOrderItem(id, userName, product.id, product.quantity, totalPriceItem )

                totalPriceOrder = totalPriceOrder + totalPriceItem 

            } catch (error) {
                console.log(error)
            }
        }

        await this.orderDatabase.updateTotalPriceOrder(id, totalPriceOrder)

        const response = {
            message: "pedido concluído com sucesso!",
        }

        return response
    }

}