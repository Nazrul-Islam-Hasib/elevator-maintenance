import { Model } from "mongoose";
import { IUser } from "../user/user.interface";


export interface ChartData {
    time: string;
    door_cycles_count: number;
    door_openings_count: number;
    door_closings_count: number;
    door_closed_count: number;
    door_opened_count: number;
}

export interface IElevator {
    fabricationNumber: string;
    address: string;
    floorNumber: number;
    deviceIdentificationNumber: string;
    manufacturerName: string;
    productionYear: number;
    elevatorType: string;
    state: string;
    user: string | IUser;
    warningMessage?: string;
    reason?: string;
    chart?: {
        name: string;
        data: ChartData[];
    };
}




export type ElveatorModel = Model<IElevator, Record<string, unknown>>;

