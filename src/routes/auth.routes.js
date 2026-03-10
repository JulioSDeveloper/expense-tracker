import authController from '../controller/auth.controller.js'
import {Router} from 'express'
const authRouter=Router();

authRouter.post("/register",authController.registerUser)

authRouter.post("/login",authController.logIn)

export default authRouter;