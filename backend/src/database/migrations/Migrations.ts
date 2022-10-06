import { BaseDatabase } from "../BaseDatabase"
import { ProductDatabase } from "../ProductDatabase"
import { OrderDatabase } from "../OrderDatabase"
import { UserDatabase } from "../UserDatabase"
import { products, orders, ordersItems, users } from "./data"

class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            if (error instanceof Error) {
                console.log(error.message)
            }
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${UserDatabase.TABLE_USERS};
        DROP TABLE IF EXISTS ${OrderDatabase.TABLE_ORDER_ITEMS};
        DROP TABLE IF EXISTS ${ProductDatabase.TABLE_PRODUCTS};
        DROP TABLE IF EXISTS ${OrderDatabase.TABLE_ORDERS};

        CREATE TABLE IF NOT EXISTS ${UserDatabase.TABLE_USERS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL" NOT NULL
        );
        
        CREATE TABLE IF NOT EXISTS ${ProductDatabase.TABLE_PRODUCTS}(
            id INT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price DECIMAL(5,2) NOT NULL,
            qty_stock INT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${OrderDatabase.TABLE_ORDERS}(
            id VARCHAR(255) PRIMARY KEY,
            user_name VARCHAR(255) NOT NULL,
            delivery_date DATE NOT NULL,
            total_price_order DECIMAL(5,2) NOT NULL default 0
        );

        CREATE TABLE IF NOT EXISTS ${OrderDatabase.TABLE_ORDER_ITEMS}(
            order_id VARCHAR(255) NOT NULL,
            user_name VARCHAR(255) NOT NULL,
            product_id INT,
            quantity INT NOT NULL DEFAULT 1,
            total_price_item DECIMAL(5,2) NOT NULL,
            FOREIGN KEY (order_id) REFERENCES ${OrderDatabase.TABLE_ORDERS}(id),
            FOREIGN KEY (product_id) REFERENCES ${ProductDatabase.TABLE_PRODUCTS}(id)
        );

        `)
    }

    insertData = async () => {
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(users)

        await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .insert(products)

        await BaseDatabase
            .connection(OrderDatabase.TABLE_ORDERS)
            .insert(orders)

        await BaseDatabase
            .connection(OrderDatabase.TABLE_ORDER_ITEMS)
            .insert(ordersItems)

    }
}

const migrations = new Migrations()
migrations.execute()