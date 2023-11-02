import { UserController } from './user.controller';
import express from 'express';
const router = express.Router();

router.get(
    '/',
    UserController.getAllUsers
);

router.get(
    '/:email',
    UserController.getUser
);

export const UserRoutes = router;