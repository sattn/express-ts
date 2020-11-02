import { injectable } from "inversify";
import UserModel from "../../sequelize/user";
import { User } from "../../entities/user";
import IUserRepository from "../userRepository";

@injectable()
export default class UserRepository implements IUserRepository {

    private users: User[] = [{ id: 1, name: 'hoge', age: 25 }, { id: 2, name: 'fuga', age: 28 }, { id: 3, name: 'piyo', age: 27 }];

    async findOne(id: number): Promise<UserModel | null> {
        return await UserModel.findByPk(id);
    }

    async findAll(): Promise<UserModel[]> {
        return await UserModel.findAll();
    }

    async create(user: User): Promise<UserModel> {
        return await UserModel.create(user)
    }

    async update(user: User): Promise<[number, UserModel[]]> {
        const data = {
            name: user.name,
            age: user.age
        }
        const filter = {
            where: {
                id: user.id
            }
        };
        return await UserModel.update(data, filter);
    }
    
    async delete(id: number): Promise<number> {
        const filter = {
            where: {
                id: id
            }
        };
        return await UserModel.destroy(filter);
    }
}