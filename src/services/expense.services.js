import expenseModel from "../model/expenses.model.js";

async function getAll() {
    const expenses=await expenseModel.getAll()
      return expenses.map(e => ({
    titulo: e.titulo,
    precio: e.precio,
    categoria: e.categoria,
    user: {
      id: e.id,
      user: e.asociado_a
    }
  }));
}

async function getExpenseById(id) {
  const expense=await expenseModel.getExpenseById(id)
  return expense;
}


async function createExpense(expense) {
    const {title,amount,category,user_id}=expense;

    if(!title || !amount || !category || !user_id){
    throw new Error("Faltan datos obligatorios");
  }
  if(isNaN(amount)){
    throw new Error("Amount debe ser un numero");
  }
  const newExpenseId=await expenseModel.createExpense(
    title,
    amount,
    category,
    user_id
  );
  return {
  id:newExpenseId,
  title,
  amount,
  category,
  user_id
}
}

async function getExpensesByUser(user_id) {
  const userExpenses=await expenseModel.getExpensesByUser(user_id)
return userExpenses;
}

async function updateExpense(id,updates) {
  const expense=await expenseModel.getExpenseById(id);
  const allowedFields = ["title", "amount", "category"];
  if(!expense){
    throw new Error("El gasto que ud busca no existe");
  }
  if(Object.keys(updates).length === 0){
  throw new Error("Faltan datos obligatorios");
  }
  
  const filteredUpdates = Object.fromEntries(
    Object.entries(updates).filter(([key]) =>
      allowedFields.includes(key)
    )
  );

  if(Object.keys(filteredUpdates).length === 0){
    throw new Error("No hay campos para actualizar");
  }
  const updateExpense=await expenseModel.updateExpense(id,filteredUpdates);
  return updateExpense;
}




const expenseServices={
    getAll,
    createExpense,
    getExpensesByUser,
    getExpenseById,
    updateExpense
  
}
export default expenseServices;