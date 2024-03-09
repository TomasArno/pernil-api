import { Router } from 'express';

// CONTROLLERS

import SuppliersController from '../../controllers/suppliers.controller';

// MIDDLEWARES

// ROUTER

const router = Router();

// ROUTES

router.post('/', async (req, res, next) => {
  try {
    await SuppliersController.create(req, res);
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    await SuppliersController.getAll(req, res);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req: any, res, next) => {
  try {
    await SuppliersController.getById(req, res);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    await SuppliersController.updateById(req, res);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await SuppliersController.deleteById(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;
