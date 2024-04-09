import {IRoleSetting} from "modules/users/interfaces/IRoleSetting";
import {IRole} from "modules/security/interfaces";

export interface IUser {
    _id?: string,
    email: string,
    fullName?: string,
    firstName: string,
    lastName: string,
    avatar?: string,
    avatarOriginal?: string,
    phone: string,
    country?: string,
    createdAt?: Date,
    roles?: IRoleSetting[] | IRole[],
    lock?: boolean,
    verified?: boolean
}
