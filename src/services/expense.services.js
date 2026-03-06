import expenseModel from "../model/expenses.model.js";

async function getAll() {
    const expenses=await expenseModel.getAll()
    console.log(expenses)
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


const expenseServices={
    getAll,
    createExpense,
    getExpensesByUser
}
export default expenseServices;