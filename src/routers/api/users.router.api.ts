import { Router } from 'express';

// CONTROLLERS

import UsersController from '../../controllers/users.controller';

// ROUTER

const router = Router();

router.post('/', async (req, res, next) => {
  try {
    await UsersController.create(req, res);
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    await UsersController.getAll(req, res);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req: any, res, next) => {
  try {
    await UsersController.getById(req, res);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    await UsersController.updateById(req, res);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await UsersController.deleteById(req, res);
  } catch (error) {
    next(error);
  }
});

// ROUTES

export default router;
