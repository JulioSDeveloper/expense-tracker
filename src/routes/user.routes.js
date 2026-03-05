import {Router} from 'express'
import {createUser,getAll} from '../controller/user.controller.js'
const uRouter=Router();

uRouter.get("/",getAll)

uRouter.post("/",createUser)

export default uRouter;