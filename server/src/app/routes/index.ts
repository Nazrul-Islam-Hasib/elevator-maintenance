import express from 'express';
import { ElevatorRoutes } from '../modules/elevator/elevator.route';
import { UserRoutes } from '../modules/user/user.route';
const router = express.Router();

const moduleRoutes = [
    {
        path: '/elevators',
        route: ElevatorRoutes
    },
    {
        path: '/users',
        route: UserRoutes,
    },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;