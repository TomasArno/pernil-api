import { Router } from 'express';

// CONTROLLERS

import MovementsController from '../../controllers/movements.controller';

// ROUTER

const router = Router();

router.post('/', async (req, res, next) => {
  try {
    await MovementsController.create(req, res);
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    await MovementsController.getAll(req, res);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req: any, res, next) => {
  try {
    await MovementsController.getById(req, res);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    await MovementsController.updateById(req, res);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await MovementsController.deleteById(req, res);
  } catch (error) {
    next(error);
  }
});

// ROUTES

export default router;
