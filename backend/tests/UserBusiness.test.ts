import {UserBusiness} from '../src/business/UserBusiness'
import {UserDatabaseMock} from "./mocks/UserDatabaseMock"
import {HashManagerMock} from "./mocks/HashManagerMock"
import {AuthenticatorMock} from "./mocks/AuthenticatorMock"
import { ILoginInputDTO } from '../src/models/User'
import { BaseError } from '../src/errors/BaseError'




describe("Testando a OrderBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    // Cases of success

    test("Uma mensagem de pedido concluido é retornada", async () => {
        const input: ILoginInputDTO = {
            email: "user_admin@gmail.com",
            password: "qwerty00"
        }

        const response = await userBusiness.login(input)

        expect(response.message).toBe("Login realizado com sucesso")
        expect(response.token).toBe("token-mock-admin")
    })

    // Cases of error

    test("Erro no parâmetro email", async () => {
        expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: "user_admin",
                password: "qwerty00"
            }

            await userBusiness.login(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'email' inválido")
            }
        }
    })

    test("Erro no parâmetro senha", async () => {
        expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: "user_admin@gmail.com",
                password: "qwe"
            }

            await userBusiness.login(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'senha' inválido")
            }
        }
    })

    test("Erro ao não encontrar email no cadastro", async () => {
        expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: "user@gmail.com",
                password: "qwety00"
            }

            await userBusiness.login(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(404)
                expect(error.message).toBe("E-mail não cadastrado")
            }
        }
    })

    test("Erro ao informar senha incorreta", async () => {
        expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: "user_admin@gmail.com",
                password: "qwety0011"
            }

            await userBusiness.login(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(403)
                expect(error.message).toBe("Email e/ou senha inválidos")
            }
        }
    })

    test("Erro de autorização para usuários que não são admin", async () => {
        expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: "user_normal@gmail.com",
                password: "asdfg123"
            }

            await userBusiness.login(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(403)
                expect(error.message).toBe("Permissão insuficiente")
            }
        }
    })
    
})