import { Router } from 'express';
import apiRouter from './api/index.router.api';
import handlePathError from '../middlewares/pathHandler.mid';
import handleWrongMethod from '../middlewares/wrongMethodHandler.mid';
import errorHandler from '../middlewares/errorHandler.mid';

const indexRouter = Router();

indexRouter.use('/v1/api', apiRouter);

indexRouter.all('/*', handlePathError);
indexRouter.all('/v1/api', handleWrongMethod);

indexRouter.use(errorHandler);

export default indexRouter;
