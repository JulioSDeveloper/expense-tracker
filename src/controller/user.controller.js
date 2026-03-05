import uServices from '../services/user.services.js'

export async function getAll(req,res) {
    try {
        const userList=await uServices.getAll();
        res.status(200).json({message: "Lista de usuarios",data: userList});
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Error interno" });
    }
}

export async function createUser(req,res){
    try {
        const newU=await uServices.createUser(req.body)
        res.status(201).json({ message: `Usuario ${newU} creado correctamente ` });
    } catch (error) {
  console.error(error);
  if (error.message === "Faltan campos obligatorios" ||
      error.message === "Password muy corto" ||
      error.message === "El email ya está registrado") {
    return res.status(400).json({ error: error.message });
  }

  res.status(500).json({ error: "Error interno" });
}
    }


