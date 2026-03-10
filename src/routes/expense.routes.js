import {Router} from 'express'
import eController from '../controller/expense.controller.js'
const eRouter=Router();

eRouter.get("/",eController.getAll);
eRouter.get("/user/:id",eController.getExpensesByUser)
eRouter.get("/:id",eController.getExpenseById)
eRouter.post("/",eController.createExpense);
eRouter.patch("/:id",eController.updateExpense)

export default eRouter;