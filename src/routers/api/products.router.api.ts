import { Router } from 'express';

// CONTROLLERS

import ProductsController from '../../controllers/products.controller';

// ROUTER

const router = Router();

// ROUTES

router.post('/', async (req, res, next) => {
  try {
    await ProductsController.create(req, res);
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    await ProductsController.getAll(req, res);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req: any, res, next) => {
  try {
    await ProductsController.getById(req, res);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    await ProductsController.updateById(req, res);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await ProductsController.deleteById(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;
