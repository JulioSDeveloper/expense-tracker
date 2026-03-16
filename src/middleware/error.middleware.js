function errorHandler(err, req, res, next) {

  console.error(err);

  if(err.message === "No autorizado"){
    return res.status(403).json({error: err.message})
  }

  if(err.message === "El gasto que ud busca no existe"){
    return res.status(404).json({error: err.message})
  }

  res.status(500).json({
    error: "Error interno del servidor"
  })
}

export default errorHandler