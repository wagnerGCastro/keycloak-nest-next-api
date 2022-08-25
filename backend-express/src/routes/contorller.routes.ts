import { Router } from 'express';
import Controller from '../app/controllers/Controller';

const controllerRouter = Router();

controllerRouter.get('/', Controller.index);
controllerRouter.post('/login', Controller.login);

export default controllerRouter;
