import authController from '../controller/auth.controller.js'
//import {authLogIn} from '../middleware/auth.middleware.js'
import {Router} from 'express'
const authRouter=Router();

authRouter.post("/register",authController.registerUser)

authRouter.post("/login",authController.logIn)

export default authRouter;