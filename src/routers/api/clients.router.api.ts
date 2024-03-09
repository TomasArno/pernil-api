import { Router } from 'express';

// CONTROLLERS

import ClientsController from '../../controllers/clients.controller';

// MIDDLEWARES

// ROUTER

const router = Router();

// ROUTES

router.post('/', async (req, res, next) => {
  try {
    await ClientsController.create(req, res);
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    await ClientsController.getAll(req, res);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req: any, res, next) => {
  try {
    await ClientsController.getById(req, res);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    await ClientsController.updateById(req, res);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await ClientsController.deleteById(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;
