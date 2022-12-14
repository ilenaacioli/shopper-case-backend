import { Request, Response } from "express"
import { OrderBusiness } from "../business/OrderBusiness"
import { BaseError } from "../errors/BaseError"
import { ICreateOrderInputDTO } from "../models/Order"

export class OrderController {
    constructor(
        private orderBusiness: OrderBusiness
    ) {}

    public createAnOrder = async (req: Request, res: Response)=>{
        try {
            const input: ICreateOrderInputDTO ={
                products : req.body.products,
                userName: req.body.userName,
                deliveryDate: req.body.deliveryDate
            }
            
           const response = await this.orderBusiness.createAnOrder(input)
           res.status(200).send(response)
            
        } catch (error) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    
}