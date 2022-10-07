import { BaseDatabase } from "../../src/database/BaseDatabase";
import { IUserDB, USER_ROLES } from "../../src/models/User"

export class UserDatabaseMock extends BaseDatabase {
    public static TABLE_USERS = "shopper_users"

    public selectUserByEmail = async (email: string) => {
        switch (email) {

            case "user_admin@gmail.com":
                const adminUser: IUserDB = {
                    id: "id-mock",
                    name: "user_admin",
                    email: "user_admin@gmail.com",
                    password: "hash-qwerty00",
                    role: USER_ROLES.ADMIN
                }

                return adminUser

            case "user_normal@gmail.com":
                const normalUser: IUserDB = {
                    id: "id-mock",
                    name: "user_normal",
                    email: "user_normal@gmail.com",
                    password: "hash-asdfg123",
                    role: USER_ROLES.NORMAL
                }

                return normalUser

            default:
                return undefined
        }
    }
}