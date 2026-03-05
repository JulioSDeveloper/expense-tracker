import mysql2 from 'mysql2/promise';

const db=mysql2.createPool({
    host: 'localhost',      // e.g., '127.0.0.1' or 'localhost'
    user: 'root',  // e.g., 'root'
    password: '',
    database: 'expensesBD',
    port:'3307',
    waitForConnections: true
})
export default db;