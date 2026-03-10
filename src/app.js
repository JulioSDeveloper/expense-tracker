import express from "express";
import eRoutes from "./routes/expense.routes.js";
import uRoutes from "./routes/user.routes.js";
import authRouter from './src/routes/auth.routes.js'



const app = express();
app.set("json spaces", 2);
app.use(express.json());

app.use('/expenses',eRoutes)

app.use('/users',uRoutes);

app.use("/auth", authRouter)




export default app;