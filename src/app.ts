import express, { json, urlencoded } from 'express';
import helmet from 'helmet';
import indexRouter from './routers/index.router';

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(helmet());

app.use('/', indexRouter);

export default app;
