// import { Op } from "sequelize/types";
import UserRepository from "../../../src/repositories/impl/userRepositoryImpl";
import UserModel from "../../../src/sequelize/user";

describe('UserRepository', () => {
    const repository = new UserRepository();
    const sato = {id: 1, name: 'Sato', age: 20};
    const suzuki = {id: 2, name: 'Suzuki', age: 25};
    const tanaka = {id: 3, name: 'Tanaka', age: 30};
    beforeEach(() => {
        UserModel.create(sato);
        UserModel.create(suzuki);
        UserModel.create(tanaka);
    });
    afterEach(() => {
        // const filter = {
        //     where: {
        //         id: {
        //             [Op.in]: [sato.id, suzuki.id, tanaka.id]
        //         }
        //     }
        // }
        // UserModel.destroy(filter)
        UserModel.destroy({where: {id: 1}})
        UserModel.destroy({where: {id: 2}})
        UserModel.destroy({where: {id: 3}})
    });
    test('findOne return data', async () => {
        expect(await repository.findOne(sato.id)).toEqual(sato);
        expect(await repository.findOne(suzuki.id)).toEqual(suzuki);
        expect(await repository.findOne(tanaka.id)).toEqual(tanaka);
    })
    
})
