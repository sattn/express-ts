import { User } from "../../../src/entities/user";
import UserRepository from "../../../src/repositories/impl/userRepositoryImpl";
import UserMainteInteractor from "../../../src/usecases/interactores/userMainteInteractor";

jest.mock('../../../src/repositories/impl/userRepositoryImpl');

describe('UserMainteInteractor', () => {
    beforeEach(() => {
        UserRepository.mockClear();
    });
    test('searchById return null', async () => {
        UserRepository.mockImplementation(() => {
            return {
                findOne: async (id: number): Promise<User | null> => {
                    return null;
                },
            };
        });
        const repository = new UserRepository();
        const interactor = new UserMainteInteractor(repository);
        expect(await interactor.searchById(1)).toBeNull();
    })
    test('searchById return user data', async () => {
        const user: User = {id: 1, name: 'aaa', age: 20};
        UserRepository.mockImplementation(() => {
            return {
                findOne: async (id: number): Promise<User | null> => {
                    return user;
                },
            };
        });
        const repository = new UserRepository();
        const interactor = new UserMainteInteractor(repository);
        expect(await interactor.searchById(1)).toEqual(user);
    })
})
