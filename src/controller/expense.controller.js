import eServices from '../services/expense.services.js'


async function getAll(req,res) {
    try {
        const expenses=await eServices.getAll();
        res.status(200).json({message: "Lista de gastos",
            data: expenses})
    } catch (error) {
         console.error(error)
        res.status(500).json({ error: "Error interno" });
    }
}

async function getExpenseById(req,res) {
    try {
    const {id}=req.params
    const user_id=req.user.userID
  const expense=await eServices.getExpenseById(id,user_id)
  res.status(200).json(expense)
    } catch (error) {
         console.error(error)
        res.status(500).json({ error: "Error interno" });
    }
}

async function createExpense(req,res) {
    try {
        const userID=req.user.userID
        const expenseData=req.body
        const newExpense=await eServices.createExpense(expenseData,userID);

          res.status(201).json(newExpense)
    } catch(error){
  res.status(400).json({error:error.message})
    }
}

async function getExpensesByUser(req,res){
  const {id}=req.params
  const expenses=await eServices.getExpensesByUser(id)
  res.json(expenses)
}

async function updateExpense(req,res) {
    try {
    const {id}=req.params
    const updates=req.body;
    const user_id=req.user.userID
    const userChange=await eServices.updateExpense(id,updates,user_id);
    res.status(200).json(userChange)
    } catch (error) {
    res.status(400).json({error:error.message})
    }
    
}


const expenseController={
    getAll,
    createExpense,
    getExpensesByUser,
    getExpenseById,
    updateExpense
}

export default expenseController;