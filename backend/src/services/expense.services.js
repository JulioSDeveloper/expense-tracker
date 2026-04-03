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

async function getExpenseById(id,user_id) {
  const expense=await expenseModel.getExpensesById(id)
  if(!expense){
    throw new Error("El gasto que ud busca no existe");
  }
  if (Number(expense.user_id) !== Number(user_id)) {
  throw new Error("No autorizado")
}
  return expense;
}


async function createExpense(expense,user_id) {
    const {title,amount,category,created_at}=expense;

    if(!title || !amount || !category){
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
  const result=await expenseModel.getExpensesById(newExpenseId);
  return result[0];
}

async function getExpensesByUser(user_id) {
  const userExpensesResult=await expenseModel.getExpensesByUser(user_id)
  return userExpensesResult;
}

async function updateExpense(id, updates, user_id) {
  const result = await expenseModel.getExpensesById(id);
  const expense = result[0];

  const allowedFields = ["title", "amount", "category"];

  if (!expense) {
    throw new Error("El gasto que ud busca no existe");
  }

  if (Number(expense.user_id) !== Number(user_id)) {
    throw new Error("No autorizado");
  }

  if (Object.keys(updates).length === 0) {
    throw new Error("Faltan datos obligatorios");
  }

  const filteredUpdates = Object.fromEntries(
    Object.entries(updates).filter(([key]) =>
      allowedFields.includes(key)
    )
  );

  if (Object.keys(filteredUpdates).length === 0) {
    throw new Error("No hay campos para actualizar");
  }

  // 🔥 UPDATE
  await expenseModel.updateExpense(id, filteredUpdates);

  // 🔥 TRAER EL ACTUALIZADO (CLAVE)
  const updatedResult = await expenseModel.getExpensesById(id);
  const updatedExpense = updatedResult[0];

  return updatedExpense;
}

async function deleteExpense(id, user_id) {
  const result = await expenseModel.getExpensesById(id);
  const expense = result[0];

  if (!expense) {
    throw new Error("El gasto que desea eliminar no existe");
  }

  if (Number(expense.user_id) !== Number(user_id)) {
    throw new Error("No autorizado");
  }

  const deleted = await expenseModel.deleteExpense(id);

  return deleted;
}



const expenseServices={
    getAll,
    createExpense,
    getExpensesByUser,
    getExpenseById,
    updateExpense,
    deleteExpense
  
}
export default expenseServices;