import { Router } from 'express';

// ROUTERS

import dbRouter from './database.router.api';
import usersRouter from './users.router.api';
import clientsRouter from './clients.router.api';
import suppliersRouter from './suppliers.router.api';
import categoriesRouter from './categories.router.api';
import productsRouter from './products.router.api';
import movementsRouter from './movements.router.api';
import authRouter from './auth.router.api';

// MIDDLEWARES

import passportCb from '../../middlewares/passportCb.mid';
import handleWrongMethod from '../../middlewares/wrongMethodHandler.mid';

// ROUTER

const router = Router();

// ROUTES

router.use('/status', dbRouter);
router.use('/auth', authRouter);
router.use('/users', passportCb('jwt'), usersRouter);
router.use('/clients', passportCb('jwt'), clientsRouter);
router.use('/suppliers', passportCb('jwt'), suppliersRouter);
router.use('/products', passportCb('jwt'), productsRouter);
router.use('/movements', passportCb('jwt'), movementsRouter);
router.use('/categories', passportCb('jwt'), categoriesRouter);

// HANDLERS

router.all(
  /status|auth|users|clients|suppliers|categories|products|movements/,
  handleWrongMethod
);

export default router;
