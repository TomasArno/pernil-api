import express, { json, urlencoded } from "express";

import helmet from "helmet";

import indexRouter from "./routers/index.router";

import errorHandler from "./middlewares/errorHandler.mid";
import pathHandler from "./middlewares/pathHandler.mid";

// SERVER

const app = express();

// MIDDLEWARES

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(helmet());

// ROUTERS

app.use("/", indexRouter);

// HANDLERS

app.use(errorHandler);
app.use(pathHandler);

export default app;
