import { Router } from 'express';

// MIDDLEWARES

import passportCb from '../../middlewares/passportCb.mid';

// ROUTER

const router = Router();

// ROUTES

router.post('/register', passportCb('register'), async (req, res, next) => {
  try {
    res
      .cookie('token', req['token'], {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      })
      .json({
        statusCode: 201,
        message: 'Registered!',
      });
  } catch (error) {
    next(error);
  }
});

router.post('/login', passportCb('login'), async (req, res, next) => {
  try {
    res
      .cookie('token', req['token'], {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        // httpOnly: true,
      })
      .json({
        statusCode: 200,
        message: 'Logged in!',
      });
  } catch (error) {
    next(error);
  }
});

router.delete('/cookie', passportCb('jwt'), async (req, res, next) => {
  try {
    res.clearCookie('token').json({
      statusCode: 200,
      message: 'Cookie deleted',
    });
  } catch (error) {
    next(error);
  }
});

export default router;
