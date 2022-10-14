import { ProductBusiness } from "../src/business/ProductBusiness"
import { ProductDatabaseMock } from "./mocks/ProductDatabaseMock"
import { BaseError } from "../src/errors/BaseError"


describe("Testando a ProductBusiness", () => {
    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock()
    )

    // Cases of success

    test("uma lista de produtos é retornada", async () => {

        const response = await productBusiness.getProducts()

        expect(response.products.length).toBe(3)
        expect(response.products[0].id).toBe(16)
    })

    test("Retorna as informações de um determinado produto", async () => {

        const input = {
            id: 16
        }
        const response = await productBusiness.getProductById(input)

        expect(response.product.name).toBe("AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML")
        expect(response.product.price).toBe(20.49)
        expect(response.product.qty_stock).toBe(158)

    })

    test("Atualiza as informações de um determinado produto", async () => {

        const input = {
            id: 16,
            name: "novo nome do produto",
            qty_stock: 1,
            price: 2.13
        }
        const response = await productBusiness.editProduct(input)

        expect(response.message).toBe("Informações do produto atualizadas")
       
    })

    // Cases of error

    test("Erro ao não informar o id do produto", async () => {
        expect.assertions(2)

        try {
            const input = {
                id: ""
            }

            await productBusiness.getProductById(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetros inválidos ou faltando")
            }
        }
    })

    test("Erro ao não encontrar produto procurado", async () => {
        expect.assertions(2)

        try {
            const input = {
                id: 1
            }

            await productBusiness.getProductById(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(404)
                expect(error.message).toBe("Recurso não encontrado")
            }
        }
    })

    test("Erro ao não informar algum dos parâmetros do produto que deseja atualizar", async () => {
        expect.assertions(2)

        try {
            const input = {
                id: 16,
                name: "",
                qty_stock: 1,
                price: 2.13
            }

            await productBusiness.editProduct(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetros inválidos ou faltando")
            }
        }
    })

    test("Erro ao informar uma palavra ao invés de um número nos parâmetros do produto que deseja atualizar", async () => {
        expect.assertions(2)

        try {
            const input = {
                id: 16,
                name: "",
                qty_stock: 1,
                price: "dfgdfg"
            }

            await productBusiness.editProduct(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetros inválidos ou faltando")
            }
        }
    })

    test("Erro ao informar id errado do produto que deseja atualizar", async () => {
        expect.assertions(2)

        try {
            const input = {
                id: 1,
                name: "novo nome",
                qty_stock: 1,
                price: 2.99
            }

            await productBusiness.editProduct(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(404)
                expect(error.message).toBe("Produto informado não encontrado")
            }
        }
    })


})