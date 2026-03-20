import db from '../config/db.js';

async function getAll(){
    const [expenses]=await db.query(`SELECT EXPENSES.TITLE AS "titulo",EXPENSES.AMOUNT AS "precio",EXPENSES.CATEGORY AS "categoria"
        ,USERS.ID AS "id",USERS.USERNAME AS "asociado_a" 
        FROM EXPENSES INNER JOIN USERS ON EXPENSES.USER_ID=USERS.ID;`);
    return expenses;
}

async function getExpensesById(id) {
    const[userExpenses]=await db.query("SELECT * FROM expenses WHERE id = ?",[id]);
    return userExpenses;
}

async function createExpense(title,amount,category,user_id) {
    const [result]=await db.query("INSERT INTO expenses (title,amount,category,user_id) VALUES(?,?,?,?);"
    ,[title,amount,category,user_id]);

    return result.insertId;
}

async function getExpensesByUser(user_id) {
    const[userExpenses]=await db.query("SELECT * FROM expenses WHERE user_id = ?",[user_id]);
    return userExpenses[0];
}

async function updateExpense(id,filteredUpdates) {
    const keys=Object.keys(filteredUpdates)
    const camposDinamicos=keys.map(k=>`${k}=?`).join(", ");
    const values=[...Object.values(filteredUpdates), id]
    const query=`UPDATE expenses SET ${camposDinamicos} WHERE id=?`;
    const [result]=await db.execute(query,values)

    return result;

}

async function deleteExpense(id) {
    const [deleteExpense]=await db.query("DELETE FROM EXPENSES WHERE id = ? ",[id]);
    return deleteExpense[0]
}

const expenseModel={
    getAll,
    createExpense,
    getExpensesByUser,
    getExpensesById,
    updateExpense,
    deleteExpense
}
export default expenseModel;