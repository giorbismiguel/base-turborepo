export interface IRole {
    _id?: string,
    name: string,
    avatar?: string,
    description: string,
    permissions?: string[],
    createdAt?: Date,
}