import { Router } from 'express';

// CONTROLLERS

import SubcategoriesController from '../../controllers/subcategories.controller';

// ROUTER

const router = Router();

// ROUTES

router.post('/', async (req, res, next) => {
  try {
    await SubcategoriesController.create(req, res);
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    await SubcategoriesController.getAll(req, res);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req: any, res, next) => {
  try {
    await SubcategoriesController.getById(req, res);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    await SubcategoriesController.updateById(req, res);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await SubcategoriesController.deleteById(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;
