import express from 'express';
import logger from 'morgan';
import { createExpressServer, useContainer } from 'routing-controllers';
import { UserController } from './controllers/userController';
import 'reflect-metadata';
import { InversifyAdapter } from './inversify/inversifyAdapter';
import container from './inversify/inversifyConfig';

const app = createExpressServer({
  controllers: [UserController],
  defaultErrorHandler: true
});

const inversifyAdapter = new InversifyAdapter(container)
useContainer(inversifyAdapter)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

export default app;
