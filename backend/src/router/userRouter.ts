import { Router } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";
import { UserDatabase } from "../database/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export const userRouter = Router()

const userController = new UserController(
    new UserBusiness(
        new UserDatabase(),
        new HashManager(),
        new Authenticator()
    )
)

userRouter.post("/adminLogin", userController.login)
