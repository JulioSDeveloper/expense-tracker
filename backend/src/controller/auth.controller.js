import authServices from '../services/auth.services.js'


async function registerUser(req,res){
    try {
        const newU=await authServices.registerUser(req.body)
        res.status(201).json({
  success:true,
  message:"Usuario creado",
  id:newU
});
    } catch (error) {
  console.error(error);
 if(error.message === "Faltan campos obligatorios"){
    return res.status(400).json({error:error.message});
  }

  if(error.message === "El email ya está registrado"){
    return res.status(409).json({error:error.message});
  }

  res.status(500).json({error:"Error interno"});
}
    }

async function logIn(req,res) {
    try {
    const token=await authServices.logIn(req.body);
    res.status(200).json({
 "success": true,
 "token": token
})
    } catch (error) {
    res.status(500).json({error:"Error interno"});
    }
}

const authController={
    registerUser,
    logIn
} 

export default authController