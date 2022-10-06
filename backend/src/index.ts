import express from 'express'
import dotenv from "dotenv"
import cors from "cors"
import {productRouter} from "./router/productRouter"
import { orderRouter } from './router/orderRouter'
import { userRouter } from './router/userRouter'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})


app.use("/products", productRouter )
app.use("/orders", orderRouter )
app.use("/users", userRouter )