import cors from "cors";
import express, { Application } from "express";
import "express-async-errors";
import { handleErrors } from "./errors";
import { clientsRoutes } from "./routes/clients.routers";
import { contactRoutes } from "./routes/contacts.routers";
import { loginRoutes } from "./routes/login.routers";

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use("/login", loginRoutes);
app.use("/clients", clientsRoutes);
app.use("/contacts", contactRoutes);

app.use(handleErrors);

export default app;
