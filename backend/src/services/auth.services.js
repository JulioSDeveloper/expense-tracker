import authModel from '../model/auth.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

async function registerUser(user) {

  const { username, email, password } = user;

  if (!username || !email || !password) {
    throw new Error("Faltan campos obligatorios");
  }

  if (password.length < 8) {
    throw new Error("Password muy corto");
  }

  const existingUser = await authModel.findByEmail(email);

  if (existingUser) {
    throw new Error("El email ya está registrado");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUserId = await authModel.registerUser(
    username,
    email,
    hashedPassword
  );

  return newUserId;
}

async function logIn(user) {
    const {username,email,password}=user;
    const existingUser = await authModel.findByEmail(email);

    if(!existingUser){
    throw new Error("credenciales inválidas");
  }

  const repeatedPass=await bcrypt.compare(password,existingUser.password);

  if(!repeatedPass){
    throw new Error("credenciales inválidas");
  }

  const payload={
        userID:existingUser.id,
        username:existingUser.username
    }
    
    const secret = process.env.JWT_SECRET;

    const options = {
    algorithm: 'HS256', // Default is HS256
    expiresIn: "1h",    // Token expires in 1 hour
    issuer: "app"    // The issuer of the token
};
  const token=jwt.sign(payload,secret,options);

  return {
    "token":token,
    "user":{
      "username":existingUser.username,
      "email":existingUser.email
    }

  };
}

const authServices={
    registerUser,
    logIn
}

export default authServices