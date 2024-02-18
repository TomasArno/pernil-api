import express, { json, urlencoded } from "express";
import helmet from "helmet";

import indexRouter from "./routers/index.router";

// SERVER

const app = express();

// MIDDLEWARES

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(helmet());

// ROUTES

app.use("/", indexRouter);

export default app;
