import UserModel from "../sequelize/user";
import { User } from "../entities/user";

export default interface IUserRepository {
    findOne(id: number): Promise<UserModel | null>;
    findAll(): Promise<UserModel[]>;
    create(user: User): Promise<UserModel>;
    update(user: User): Promise<[number, UserModel[]]>;
    delete(id: number): Promise<number>;
}