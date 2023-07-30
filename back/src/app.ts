import express, { Application } from "express";
import "express-async-errors";

const app: Application = express();
app.use(express.json());

export default app;
