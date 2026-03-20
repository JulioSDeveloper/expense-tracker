import {Router} from 'express'
import authMiddleware from '../middleware/auth.middleware.js'
import eController from '../controller/expense.controller.js'
import {validate} from "../middleware/validate.middleware.js"
import {createExpenseSchema, updateExpenseSchema} from "../schemas/expense.schema.js"
const eRouter=Router();

eRouter.get("/",authMiddleware.authLogIn,eController.getExpensesByUser)
eRouter.get("/:id",authMiddleware.authLogIn,eController.getExpenseById)
eRouter.post("/",authMiddleware.authLogIn,validate(createExpenseSchema),eController.createExpense)
eRouter.patch("/:id",authMiddleware.authLogIn,validate(updateExpenseSchema),eController.updateExpense)
eRouter.delete("/:id",authMiddleware.authLogIn,eController.deleteExpense)

export default eRouter;