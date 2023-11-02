import { Request, RequestHandler, Response } from "express";
import httpStatus from "http-status";
import { UserService } from "./user.service";

const getAllUsers: RequestHandler =
    async (req: Request, res: Response) => {
        const result = await UserService.getAllUsers();
        res.send({
            statusCode: httpStatus.OK,
            success: true,
            message: "Users retrived successfully!",
            data: result
        });
    }



const getUser: RequestHandler =
    async (req: Request, res: Response) => {
        const result = await UserService.getUser(req.params.email);
        if(result.length<1){
            res.send({
                statusCode: httpStatus.NO_CONTENT,
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

export const UserController = {
    getAllUsers, getUser
}