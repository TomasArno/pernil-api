import { Router } from 'express';

// CONTROLLERS

import AuthController from '../../controllers/auth.controller';

// MIDDLEWARES

import passport from '../../middlewares/passport.mid';

// ROUTER

const router = Router();

// ROUTES

router.post('/register', passport.authenticate('register'));

export default router;
