import { Container } from "inversify";
import UserRepository from "../repositories/impl/userRepositoryImpl";
import IUserRepository from "../repositories/userRepository";
import UserMainteInteractor from "../usecases/interactores/userMainteInteractor";
import IUserMainteUsecase from "../usecases/userMainteUsecase";
import TYPES from "./inversifyTypes";

const container = new Container();
container
    .bind<IUserRepository>(TYPES.IUserRepository)
    .to(UserRepository)
    .inSingletonScope();
container
    .bind<IUserMainteUsecase>(TYPES.IUserMainteUsercase)
    .to(UserMainteInteractor)
    .inSingletonScope();

export default container;
