import express from "express";
import { ElevatorController } from "./elevator.controller";
const router = express.Router();

router.get(
    '/',
    ElevatorController.getAllElevators
);
router.get(
    '/:email',
    ElevatorController.getElevatorsByUser
);
export const ElevatorRoutes = router;