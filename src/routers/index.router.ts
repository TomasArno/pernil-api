import { Router } from "express";

import errorHandler from "../middlewares/errorHandler.mid";
import handlePathError from "../middlewares/pathHandler.mid";
import handleWrongMethod from "../middlewares/wrongMethodHandler.mid";

import apiRouter from "./api/index.router.api";

// ROUTER

const router = Router();

// ROUTES

router.use("/v1/api", apiRouter);

// HANDLERS

router.all("/v1/api", handleWrongMethod);
router.all("/*", handlePathError);
router.use(errorHandler);

export default router;
