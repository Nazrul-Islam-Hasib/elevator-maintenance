import { Schema, model } from "mongoose";
import { ElveatorModel, IElevator } from "./elevator.interface";


const elevatorSchema = new Schema<IElevator>({
    fabricationNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    floorNumber: {
        type: Number,
        required: true,
    },
    deviceIdentificationNumber: {
        type: String,
        required: true,
    },
    manufacturerName: {
        type: String,
        required: true,
    },
    productionYear: {
        type: Number,
        required: true,
    },
    elevatorType: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    user:{
        type: String,
        ref: 'User',
        required: true
    },
    warningMessage: {
        type: String,
        required: false,
    },
    reason: {
        type: String,
        required: false,
    },
    chart: {
        name: {
            type: String,
            required: false,
        },
        data: [
            {
                time: {
                    type: String,
                    required: false,
                },
                door_cycles_count: {
                    type: Number,
                    required: false,
                },
                door_openings_count: {
                    type: Number,
                    required: false,
                },
                door_closings_count: {
                    type: Number,
                    required: false,
                },
                door_closed_count: {
                    type: Number,
                    required: false,
                },
                door_opened_count: {
                    type: Number,
                    required: false,
                },
            },
        ],
    },
});

export const Elevator = model<IElevator, ElveatorModel>('Elevators', elevatorSchema);
