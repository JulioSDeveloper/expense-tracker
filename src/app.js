import express from "express";
import eRoutes from "./routes/expense.routes.js";
import uRoutes from "./routes/user.routes.js";

const app = express();
app.set("json spaces", 2);
app.use(express.json());

app.use('/expenses',eRoutes)

app.use('/users',uRoutes);





export default app;