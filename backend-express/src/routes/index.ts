import { Router } from 'express';

import controllerRouter from './contorller.routes';

const routes = Router();

routes.use('/controller', controllerRouter);

export default routes;
