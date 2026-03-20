import jwt from 'jsonwebtoken';

function authLogIn(req,res,next) {
    const header=req.headers.authorization
    if(!header){
    res.status(401).json({error:"Unauthorized"})
    return
    }
    const token=header.split(" ");
    if(token[0]!=="Bearer"){
    res.status(401).json({error:"Unauthorized"})
    return
    }
    try{
    const esVerificado=jwt.verify(token[1],process.env.JWT_SECRET)
   req.user=esVerificado;
   next()
    }catch(error){
    res.status(401).json({error:"Unauthorized"})
    return
    }
}

const authMiddleware={
authLogIn
}

export default authMiddleware