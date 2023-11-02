import { IUser } from "./user.interface";
import { User } from "./user.model";


const getUser = async(email: String): Promise<IUser[]> =>{
    const user : IUser[] = await User.find({email : email});
    return user;
}

const getAllUsers = async(): Promise<IUser[]>=>{
    const users : IUser[] = await User.find();
    return users;
}

export const UserService = {
    getUser, getAllUsers
}