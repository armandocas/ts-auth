import { Router } from "express";

import authMiddlewares from './app/middlewares/authMiddlewares';

import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';

const router = Router();

router.post('/users', UserController.store);
router.post('/auth', AuthController.authenticate);
router.get('/users', authMiddlewares, UserController.index);

export default router;