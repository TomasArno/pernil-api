import { Router } from 'express';
import apiRouter from './api/index.router.api';
import pathHandler from '../middlewares/pathHandler.mid';
import errorHandler from '../middlewares/errorHandler.mid';

const indexRouter = Router();

indexRouter.use('/v1/api', apiRouter);

indexRouter.all('/*', pathHandler);
indexRouter.all('/v1/api', pathHandler);
indexRouter.use(errorHandler);

export default indexRouter;
