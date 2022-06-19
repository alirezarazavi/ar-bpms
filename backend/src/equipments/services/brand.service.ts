import { BaseServiceInterface } from "../../common/interfaces/base.service.interface";
import { AppDataSource } from "../../common/databases/data-source";
import { Brand } from "../entities/brand.entity";
import { BrandInterface } from "../interfaces/brand.interface";

class BrandService implements BaseServiceInterface {
    async list(limit: number, page: number) {
        const brandRepository = AppDataSource.getRepository(Brand);

        return brandRepository.find();
    }

    async create(resource: BrandInterface) {
        const brand = new Brand();
        brand.name = resource.name;
        brand.faName = resource.faName;

        const equipmentRepository = AppDataSource.getRepository(Brand);
        return equipmentRepository.save(brand);
    }

    deleteById(id: string): Promise<any> {
        return Promise.resolve(undefined);
    }

    // async patchById(id: string, resource: PatchUserDto) {
    //     return UsersDao.updateUserById(id, resource);
    // }
    //
    // async readById(id: string) {
    //     return UsersDao.getUserById(id);
    // }
    //
    // async putById(id: string, resource: PutUserDto) {
    //     return UsersDao.updateUserById(id, resource);
    // }
    //
    // async deleteById(id: string) {
    //     return UsersDao.removeUserById(id);
    // }
}

export default new BrandService();