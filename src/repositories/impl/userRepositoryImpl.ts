import { injectable } from "inversify";
import { User } from "../../entities/user";
import IUserRepository from "../userRepository";

@injectable()
export default class UserRepository implements IUserRepository {

    private users: User[] = [{ id: 1, name: 'hoge', age: 25 }, { id: 2, name: 'fuga', age: 28 }, { id: 3, name: 'piyo', age: 27 }];

    findOne(id: number): User | undefined {
        return this.users.find(e => e.id === id);
    }
    findAll(): User[] {
        return this.users;
    }
    create(user: User): void {
        this.users.push(user);
    }
    update(user: User): void {
        // TODO
    }
    delete(id: number): void {
        // TODO
    }
}