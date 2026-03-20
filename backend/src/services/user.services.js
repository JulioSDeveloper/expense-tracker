import uModel from '../model/user.model.js'
import bcrypt from 'bcrypt'

async function getAll() {
  return await uModel.getAll();
}


async function createUser(user) {

  const { username, email, password } = user;

  if (!username || !email || !password) {
    throw new Error("Faltan campos obligatorios");
  }

  if (password.length < 8) {
    throw new Error("Password muy corto");
  }

  const existingUser = await uModel.findByEmail(email);

  if (existingUser) {
    throw new Error("El email ya está registrado");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUserId = await uModel.createUser(
    username,
    email,
    hashedPassword
  );

  return newUserId;
}

const userService = {
  getAll,
  createUser
};

export default userService;