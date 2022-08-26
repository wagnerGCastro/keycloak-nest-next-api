import { Router } from 'express';
import Controller from '../app/controllers/Controller';

const controllerRouter = Router();

controllerRouter.post('/send', Controller.index);

export default controllerRouter;
