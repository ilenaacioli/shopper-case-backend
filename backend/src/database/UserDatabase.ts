import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "shopper_users"

    public selectUserByEmail = async (email: string) =>{
        const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
        .select("*")
        .where({
            email
        })

        return result[0]
    }
}