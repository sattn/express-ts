import { User } from "../entities/user";

export default interface IUserMainteUsecase {
    searchById(id: number): Promise<User | null>;
    searchAll(): Promise<User[]>;
    createUser(user: User): Promise<void>;
    updateUser(user: User): Promise<void>;
    deleteUser(id: number): Promise<void>;
}
