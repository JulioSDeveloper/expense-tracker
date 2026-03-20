import uServices from '../services/user.services.js'

export async function getAll(req,res) {
    try {
        const userList=await uServices.getAll();
        res.status(200).json({
      success:true,
      data:userList
    });
    } catch (error) {
        res.status(500).json({
      success:false,
      error:"Error interno"
    });
    }
}

export async function createUser(req,res){
    try {
        const newU=await uServices.createUser(req.body)
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


