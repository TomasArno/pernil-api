import { Router } from "express";

import apiRouter from "./api/index.router.api";

const indexRouter = Router();

indexRouter.use("/api", apiRouter);

export default indexRouter;
