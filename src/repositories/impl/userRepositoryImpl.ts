import { injectable } from "inversify";
import UserModel from "../../sequelize/user";
import { User } from "../../entities/user";
import IUserRepository from "../userRepository";
import 'reflect-metadata';

@injectable()
export default class UserRepository implements IUserRepository {

    async findOne(id: number): Promise<User | null> {
        return await UserModel.findByPk(id).then(res => {
            return res == null ? null : {
                id: res.id, 
                name: res.name, 
                age: res.age
            }
        });
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