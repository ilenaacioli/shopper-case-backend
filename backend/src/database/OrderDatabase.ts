import { IOrderDB, IOrderItemsDB } from "../models/Order";
import { BaseDatabase } from "./BaseDatabase";

export class OrderDatabase extends BaseDatabase {
    public static TABLE_ORDERS = "shopper_orders"
    public static TABLE_ORDER_ITEMS = "shopper_order_items"

    public insertOrder = async (order: IOrderDB) :  Promise<void>=> {

        await BaseDatabase.connection(OrderDatabase.TABLE_ORDERS)
            .insert(order)
    }

    public insertOrderItem = async (orderItems: IOrderItemsDB) : Promise<void> => {

        await BaseDatabase.connection(OrderDatabase.TABLE_ORDER_ITEMS)
            .insert(orderItems)
    }

    public updateTotalPriceOrder = async (orderId: string, totalPriceOrder:number) : Promise<void> => {

         await BaseDatabase.connection(OrderDatabase.TABLE_ORDERS)
            .update({
                total_price_order: totalPriceOrder
            })
            .where({
                id:orderId
            })

    }
}