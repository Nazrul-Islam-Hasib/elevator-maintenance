import { IElevator } from "./elevator.interface";
import { Elevator } from "./elevator.model";

const getAllElevators = async(): Promise<IElevator[]>=>{
    const elevators : IElevator[] = await Elevator.find();
    return elevators;
}

const getElevatorsByUser = async(email: String): Promise<IElevator[]>=>{
    const elevators : IElevator[] = await Elevator.find({user : email});
    return elevators;
}

export const ElevatorService = {
    getAllElevators, getElevatorsByUser
}