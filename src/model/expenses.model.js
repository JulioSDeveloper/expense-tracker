import db from '../config/db.js';

async function getAll(){
    const [expenses]=await db.query(`SELECT EXPENSES.TITLE AS "titulo",EXPENSES.AMOUNT AS "precio",EXPENSES.CATEGORY AS "categoria"
        ,USERS.ID AS "id",USERS.USERNAME AS "asociado_a" 
        FROM EXPENSES INNER JOIN USERS ON EXPENSES.USER_ID=USERS.ID;`);
    return expenses;
}

async function createExpense(title,amount,category,user_id) {
    const [result]=await db.query("INSERT INTO expenses (title,amount,category,user_id) VALUES(?,?,?,?);"
    ,[title,amount,category,user_id]);

    return result.insertId;
}

async function getExpensesByUser(user_id) {
    const[userExpenses]=await db.query("SELECT * FROM expenses WHERE user_id = ?",[user_id]);
    console.log(userExpenses)
    return userExpenses;
}

const expenseModel={
    getAll,
    createExpense,
    getExpensesByUser
}
export default expenseModel;