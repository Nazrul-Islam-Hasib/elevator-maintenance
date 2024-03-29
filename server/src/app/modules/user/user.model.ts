import { Schema, model } from "mongoose";
import { IUser, UserModel } from "./user.interface";


const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    },
});

export const User = model<IUser, UserModel>('Users', userSchema);
