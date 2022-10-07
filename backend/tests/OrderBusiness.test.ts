import { OrderBusiness } from "../src/business/OrderBusiness"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { OrderDatabaseMock } from "./mocks/OrderDatabaseMock"
import { ProductDatabaseMock } from "./mocks/ProductDatabaseMock"
import { ICreateOrderInputDTO } from '../src/models/Order'
import { BaseError } from "../src/errors/BaseError"

describe("Testando a OrderBusiness", () => {
    const orderBusiness = new OrderBusiness(
        new OrderDatabaseMock(),
        new ProductDatabaseMock(),
        new IdGeneratorMock()
    )

    // Cases of success

    test("Uma mensagem de pedido concluido é retornada", async () => {
        const input: ICreateOrderInputDTO = {
            userName: "usuário teste",
            deliveryDate: "2022-10-08",
            products: [
                {
                    "id": 16,
                    "quantity": 1
                }
            ]
        }

        const response = await orderBusiness.createAnOrder(input)

        expect(response.message).toBe("pedido concluído com sucesso!")
    })

    // Cases of error

    test("Erro quando a lista de produtos estiver vazia", async () => {
        expect.assertions(2)

        try {
            const input: ICreateOrderInputDTO = {
                userName: "usuário teste",
                deliveryDate: "2022-10-08",
                products: [
                   
                ]
            }
            await orderBusiness.createAnOrder(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Pedido vazio! informe pelo menos um produto")
            }
        }
    })

    test("Erro quando o nome do usuário não é informado", async () => {
        expect.assertions(2)

        try {
            const input: ICreateOrderInputDTO = {
                userName: "",
                deliveryDate: "2022-10-08",
                products: [
                    {
                        "id": 16,
                        "quantity": 1
                    }
                ]
            }
            await orderBusiness.createAnOrder(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Informe seu nome!")
            }
        }
    })

    test("Erro quando a data informada é o dia atual ou data já passada", async () => {
        expect.assertions(2)

        try {
            const input: ICreateOrderInputDTO = {
                userName: "usuário teste",
                deliveryDate: "2022-10-07",
                products: [
                    {
                        "id": 16,
                        "quantity": 1
                    }
                ]
            }
            await orderBusiness.createAnOrder(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Data inválida, informe uma data futura")
            }
        }
    })

    test("Erro quando a quantidade pedida for maior que a do estoque", async () => {
        expect.assertions(2)

        try {
            const input: ICreateOrderInputDTO = {
                userName: "usuário teste",
                deliveryDate: "2022-10-08",
                products: [
                    {
                        "id": 16,
                        "quantity": 300
                    }
                ]
            }
            await orderBusiness.createAnOrder(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("A quantidade pedida para o produto 16-AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML está indisponível no momento")
            }
        }
    })
})