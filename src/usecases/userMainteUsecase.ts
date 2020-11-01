import { User } from "../entities/user";

export default interface IUserMainteUsecase {
    searchById(id: number): User | null;
    searchAll(): User[];
    createUser(user: User): void;
    updateUser(user: User): void;
    deleteUser(id: number): void;
}
