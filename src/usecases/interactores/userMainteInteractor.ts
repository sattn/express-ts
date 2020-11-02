import { inject, injectable } from "inversify";
import { User } from "../../entities/user";
import TYPES from "../../inversify/inversifyTypes";
import IUserRepository from "../../repositories/userRepository";
import IUserMainteUsecase from "../userMainteUsecase";

@injectable()
export default class UserMainteInteractor implements IUserMainteUsecase {

    constructor(@inject(TYPES.IUserRepository) private repo: IUserRepository){
    }

    async searchById(id: number): Promise<User | null> {
        const user = await this.repo.findOne(id);
        if (user == null) return null;
        return {
            id: user.id,
            name: user.name,
            age: user.age
        }
    }

    async searchAll(): Promise<User[]> {
        const users = await this.repo.findAll();
        return users.map<User>(user => {
            return {
                id: user.id, 
                name: user.name, 
                age: user.age
            }
        });
    }

    async createUser(user: User): Promise<void> {
        await this.repo.create(user);
    }

    async updateUser(user: User): Promise<void> {
        await this.repo.update(user);
    }

    async deleteUser(id: number): Promise<void> {
        await this.repo.delete(id);
    }
}