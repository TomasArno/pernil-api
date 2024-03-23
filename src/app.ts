import { isDevEnvironment } from './utils/constants';

import express, { json, urlencoded } from 'express';
import cookie from 'cookie-parser';
import helmet from 'helmet';
import morgan from 'morgan';

import indexRouter from './routers/index.router';

// SERVER

const app = express();

// MIDDLEWARES

app.disable('x-powered-by');
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(helmet());
app.use(cookie(process.env.COOKIE_SECRET));

isDevEnvironment() ? app.use(morgan('dev')) : app.use(morgan('short'));

// ROUTES

app.use('/', indexRouter);

export default app;
