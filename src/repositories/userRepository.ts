import { User } from "../entities/user";

export default interface IUserRepository {
    findOne(id: number): User | undefined;
    findAll(): User[];
    create(user: User): void;
    update(user: User): void;
    delete(id: number): void;
}