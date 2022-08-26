import { Router } from 'express';

import controllerRouter from './contorller.routes';

const routes = Router();

routes.use('/controler', controllerRouter);

export default routes;
