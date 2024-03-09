import { Router } from 'express';

// CONTROLLERS

import CategoriesController from '../../controllers/categories.controller';

// ROUTER

const router = Router();

// ROUTES

router.post('/', async (req, res, next) => {
  try {
    await CategoriesController.create(req, res);
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    await CategoriesController.getAll(req, res);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req: any, res, next) => {
  try {
    await CategoriesController.getById(req, res);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    await CategoriesController.updateById(req, res);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await CategoriesController.deleteById(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;
