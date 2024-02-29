import { Router } from 'express';
import ServerController from '../../controllers/server.controller';
import handleWrongMethod from '../../middlewares/wrongMethodHandler.mid';

const dbRouter = Router();

dbRouter.get('/', ServerController.getStatus);

dbRouter.all('/', handleWrongMethod);

export default dbRouter;
