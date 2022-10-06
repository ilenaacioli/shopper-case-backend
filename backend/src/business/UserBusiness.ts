import { UserDatabase } from "../database/UserDatabase"
import { AuthorizationError } from "../errors/AuthorizationError"
import { ILoginInputDTO, User, USER_ROLES } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"


export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}


    public login = async (input: ILoginInputDTO) => {
        const email = input.email
        const password = input.password

        
        if (!email || typeof email !== "string" || !email.includes('@')) {
            throw new Error("Parâmetro 'email' inválido")
        }
        
        if (!password || typeof password !== "string" || password.length < 6) {
            throw new Error("Parâmetro 'senha' inválido")
        }
        
        const userDB = await this.userDatabase.selectUserByEmail(email)
        
        if (!userDB) {
            throw new Error("E-mail não cadastrado")
        }
        
        const user = new User(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.role
            )
            
            const isPasswordCorrect = await this.hashManager.compare(password, user.getPassword())
            
            if (!isPasswordCorrect) {
                throw new AuthorizationError("Email e/ou senha inválidos")
            }
            
            const payload: ITokenPayload = {
                id: user.getId(),
                role: user.getRole()
            }
            
            if (payload.role !== USER_ROLES.ADMIN) {
                throw new AuthorizationError()
            }

        const token = this.authenticator.generateToken(payload)

        const response = {
            message: "Login realizado com sucesso",
            token
        }

        return response
    }

}