import { BaseServiceInterface } from "../../common/interfaces/base.service.interface";
import { AppDataSource } from "../../common/databases/data-source";
import { Property } from "../entities/property.entity";
import { PropertyInterface } from "../interfaces/property.interface";
import { Type } from "../entities/type.entity";
import {TypeInterface} from "../interfaces/type.interface";

class PropertyService implements BaseServiceInterface {
    async list(limit: number, page: number) {
        const propertyRepository = AppDataSource.getRepository(Property);
        return propertyRepository.find();
    }

    async listByTypeId(id: string) {
        const propertyRepository = AppDataSource.getRepository(Property);
        return propertyRepository.find({
                relations: {
                    type: true,
                },
                where: {
                    type: {
                        id: Number(id)
                    }
                }
            }
        );
    }

    async create(resource: PropertyInterface) {
        const propertyRepository = AppDataSource.getRepository(Property);

        const property = new Property();
        property.type = resource.type;
        property.name = resource.name;
        property.faName = resource.faName;

        return propertyRepository.save(property);
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

export default new PropertyService();