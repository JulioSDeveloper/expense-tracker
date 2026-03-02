import express from "express";
import eRoutes from "./routes/expense.routes.js";

const app = express();

app.use(express.json());

app.use('/health',eRoutes)




export default app;