import { Request, RequestHandler, Response } from "express";
import { ElevatorService } from "./elevator.service";
import httpStatus from "http-status";

const getAllElevators: RequestHandler = 
    async(req: Request, res: Response) => {
        const result = await ElevatorService.getAllElevators();
        res.send({
            statusCode: httpStatus.OK,
            success: true,
            message: "Data retrived successfully!",
            data: result
        });
    }

const getElevatorsByUser : RequestHandler = 
    async (req:Request, res: Response) => {
        const result = await ElevatorService.getElevatorsByUser(req.params.email)
        console.log(result.length)
        if(result.length<1){
            res.send({
                statusCode: httpStatus[204],
                success: true,
                message: "No data Available for the user!",
                data: result
            });
        }
        else{
            res.send({
                statusCode: httpStatus.OK,
                success: true,
                message: "Data retrived successfully!",
                data: result
            });
        }
    }

    export const ElevatorController = {
        getAllElevators, getElevatorsByUser
    }