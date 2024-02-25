import { Router } from 'express';

import usersRouter from './users.router.api';
import clientsRouter from './clients.router.api';
import suppliersRouter from './suppliers.router.api';
import categoriesRouter from './categories.router.api';
import productsRouter from './products.router.api';
import movementsRouter from './movements.router.api';
import authRouter from './auth.router.api';

import handleWrongMethod from '../../middlewares/wrongMethodHandler.mid';

// ROUTER

const router = Router();

// ROUTES

router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/clients', clientsRouter);
router.use('/suppliers', suppliersRouter);
router.use('/products', productsRouter);
router.use('/movements', movementsRouter);
router.use('/categories', categoriesRouter);

// HANDLERS

router.all(
  /auth|users|clients|suppliers|categories|products|movements/,
  handleWrongMethod
);

export default router;
