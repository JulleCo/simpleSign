import { Router } from 'express';
import { PrismaClient } from '@prisma/client'

import UserRepository from './userRepository';
import UserService from './userService';
import UserController from "./userController";
import UserRouter from './userRouter';

const prisma = new PrismaClient()
const router: Router = Router();

const userRepository: UserRepository = new UserRepository(prisma);
const userService: UserService = new UserService(userRepository);
const userController: UserController = new UserController(userService)
const userRouter: UserRouter = new UserRouter(router, userController);

export default userRouter;