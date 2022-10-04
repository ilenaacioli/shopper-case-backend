export interface IOrderDB {
    id: string,
    user_name: string,
    delivery_date: Date,
    total_price_order: number
}

export interface IOrderItemsDB {
    order_id: string,
    user_name: string,
    product_id: number,
    quantity: number,
    total_price_item: number
}