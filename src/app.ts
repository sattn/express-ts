import express from 'express';
import logger from 'morgan';
import { createExpressServer } from 'routing-controllers';
import { UserController } from './controllers/UserController';
import 'reflect-metadata';

const app = createExpressServer({
  controllers: [UserController],
  defaultErrorHandler: true
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

export default app;
