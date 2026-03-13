import express from "express";
import eRoutes from "./routes/expense.routes.js";
import uRoutes from "./routes/user.routes.js";
import authRouter from './routes/auth.routes.js'



const app = express();
app.set("json spaces", 2);
app.use(express.json());

app.use("/auth",authRouter)
app.use('/expenses',eRoutes)
app.use('/users',uRoutes);






export default app;