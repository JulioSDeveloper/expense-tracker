import {Router} from 'express'
import authMiddleware from '../middleware/auth.middleware.js'
import eController from '../controller/expense.controller.js'
const eRouter=Router();

eRouter.get("/",authMiddleware.authLogIn,eController.getExpensesByUser)
eRouter.get("/:id",authMiddleware.authLogIn,eController.getExpenseById)
eRouter.post("/",authMiddleware.authLogIn,eController.createExpense);
eRouter.patch("/:id",authMiddleware.authLogIn,eController.updateExpense)

export default eRouter;