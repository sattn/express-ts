import { inject, injectable } from "inversify";
import { User } from "../../entities/user";
import TYPES from "../../inversify/inversifyTypes";
import IUserRepository from "../../repositories/userRepository";
import IUserMainteUsecase from "../userMainteUsecase";

@injectable()
export default class UserMainteInteractor implements IUserMainteUsecase {

    constructor(@inject(TYPES.IUserRepository) private repo: IUserRepository){
    }

    searchById(id: number): User | null {
        const user = this.repo.findOne(id);
        if (user) return user;
        return null;
    }
    searchAll(): User[] {
        return this.repo.findAll();
    }
    createUser(user: User): void {
        this.repo.create(user);
    }
    updateUser(user: User): void {
        this.repo.update(user);
    }
    deleteUser(id: number): void {
        this.repo.delete(id);
    }
}