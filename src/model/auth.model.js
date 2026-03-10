import db from '../config/db.js'


async function registerUser(username,email,password) {
    const [result]=await db.query("INSERT INTO users (username,email,password) VALUES(?,?,?);",[username,email,password]);
    return result.insertId
}

async function findByEmail(email) {
  const [rows] = await db.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );
  return rows[0] || null;
}

const authModel={
    registerUser,
    findByEmail
}

export default authModel