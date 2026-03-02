import mysql2 from 'mysql2/promise';

const db=mysql2.createPool({
    host: '',      // e.g., '127.0.0.1' or 'localhost'
    user: '',  // e.g., 'root'
    password: '',
    database: '',
    port:'',
    waitForConnections: true
})
export default db;