import { Model } from "mongoose";

export interface IUser {
    name: string;
    email: string;
    picture: string;
}


export type UserModel = Model<IUser, Record<string, unknown>>;

