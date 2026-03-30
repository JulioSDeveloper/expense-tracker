import express from "express";
import eRoutes from "./routes/expense.routes.js";
import uRoutes from "./routes/user.routes.js";
import authRouter from './routes/auth.routes.js'
import errorHandler from "./middleware/error.middleware.js"
import cors from 'cors'



const app = express();
app.set("json spaces", 2);
app.use(express.json());
app.use(cors());

app.use("/auth",authRouter)
app.use('/expenses',eRoutes)
app.use('/users',uRoutes);
app.use(errorHandler)






export default app;