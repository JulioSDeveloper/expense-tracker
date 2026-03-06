import db from '../config/db.js'

async function getAll() {
const [users]=await db.query("SELECT id, username, email, created_at FROM users");
return users
}


async function createUser(username,email,password) {
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

const userModel = {
  getAll,
  createUser,
  findByEmail
};

export default userModel;

