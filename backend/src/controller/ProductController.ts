import { Request, Response } from "express"
import { ProductBusiness } from "../business/ProductBusiness";
import { BaseError } from "../errors/BaseError"

export class ProductController {
    constructor(
        private productBusiness: ProductBusiness
    ) {}

    public getProducts = async (req: Request, res: Response) =>{
        try {

            const response = await this.productBusiness.getProducts()
            res.status(200).send(response)

        } catch (error) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    public getProductById = async (req: Request, res: Response) =>{
        try {
            const input = { id : req.params.id }

            const response = await this.productBusiness.getProductById(input)
            res.status(200).send(response)

        } catch (error) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" })
        }
    }
}