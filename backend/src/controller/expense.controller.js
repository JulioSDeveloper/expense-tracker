import eServices from '../services/expense.services.js'


async function getAll(req,res,next) {
    try {
        const expenses=await eServices.getAll();
        res.status(200).json({message: "Lista de gastos",
            data: expenses})
    } catch (error) {
         console.error(error)
        next(error)
    }
}

async function getExpenseById(req,res,next) {
    try {
    const {id}=req.params
    const user_id=req.user.userID
  const expense=await eServices.getExpenseById(id,user_id)
  res.status(200).json(expense)
    } catch (error) {
         console.error(error)
        next(error)
    }
}

async function createExpense(req,res,next) {
    try {
        const userID=req.user.userID
        const newExpense=await eServices.createExpense(req.body,userID);
        
        res.status(201).json(newExpense)
    } catch(error){
   next(error)
    }
}

async function getExpensesByUser(req,res,next){
    try{
const id=req.user.userID
  const expenses=await eServices.getExpensesByUser(id)
  res.json(expenses)
    }catch(error){
   next(error)
    }
  
}

async function updateExpense(req,res,next) {
    try {
    const {id}=req.params
    const updates=req.body;
    const user_id=req.user.userID
    const userChange=await eServices.updateExpense(id,updates,user_id);
    res.status(200).json(userChange)
    } catch (error) {
    next(error)
    }
    
}

async function deleteExpense(req,res,next) {
    try {
    const {id}=req.params
    const user_id=req.user.userID
    const deleteExpense=await eServices.deleteExpense(id,user_id)
    res.json(deleteExpense)
    }catch(error){
     next(error)
    }
}

const expenseController={
    getAll,
    createExpense,
    getExpensesByUser,
    getExpenseById,
    updateExpense,
    deleteExpense
}

export default expenseController;