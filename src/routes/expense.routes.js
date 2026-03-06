import {Router} from 'express'
import eController from '../controller/expense.controller.js'
const eRouter=Router();

eRouter.get("/",eController.getAll);
eRouter.get("/user/:id",eController.getExpensesByUser)
eRouter.post("/",eController.createExpense);

export default eRouter;