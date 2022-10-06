import { BaseDatabase } from "./BaseDatabase";

export class OrderDatabase extends BaseDatabase {
    public static TABLE_ORDERS = "shopper_orders"
    public static TABLE_ORDER_ITEMS = "shopper_order_items"

    public insertOrder = async (id: string, userName: string, deliveryDate: string) => {

        await BaseDatabase.connection(OrderDatabase.TABLE_ORDERS)
            .insert({
                id: id,
                user_name: userName,
                delivery_date: deliveryDate,
            })
    }

    public insertOrderItem = async (orderId: string, userName: string, productId:number, quantity: number, totalPriceItem: number) => {

        await BaseDatabase.connection(OrderDatabase.TABLE_ORDER_ITEMS)
            .insert({
                order_id: orderId,
                user_name: userName,
                product_id: productId,
                quantity: quantity,
                total_price_item: totalPriceItem
            })
    }

    public calculateOrderTotalPrice = async (orderId: string) => {

        const totalPrice = await BaseDatabase.connection(OrderDatabase.TABLE_ORDER_ITEMS)
            .sum("total_price_item")
            .where({
                order_id:orderId
            })

        return totalPrice[0]
    }

    public updateTotalPriceOrder = async (orderId: string, totalPriceOrder:number) => {

         await BaseDatabase.connection(OrderDatabase.TABLE_ORDERS)
            .update({
                total_price_order: totalPriceOrder
            })
            .where({
                id:orderId
            })

    }
}