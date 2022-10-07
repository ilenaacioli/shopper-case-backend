import { IOrderDB, IOrderItemsDB } from "../../src/models/Order";
import { BaseDatabase } from "../../src/database/BaseDatabase";

export class OrderDatabaseMock extends BaseDatabase {
    public static TABLE_ORDERS = "shopper_orders"
    public static TABLE_ORDER_ITEMS = "shopper_order_items"

    public insertOrder = async (order: IOrderDB) :  Promise<void>=> {
    }

    public insertOrderItem = async (orderItems: IOrderItemsDB) : Promise<void> => {
    }

    public updateTotalPriceOrder = async (orderId: string, totalPriceOrder:number) : Promise<void> => {
    }
}