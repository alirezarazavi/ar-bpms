import { BaseServiceInterface } from "../../common/interfaces/base.service.interface";
import { AppDataSource } from "../../common/databases/data-source";
import { Type } from "../entities/type.entity";
import { TypeInterface } from "../interfaces/type.interface";

class TypeService implements BaseServiceInterface {
    async list(limit: number, page: number) {
        const typeRepository = AppDataSource.getRepository(Type);
        return typeRepository.find();
    }

    async create(resource: TypeInterface) {
        const typeRepository = AppDataSource.getRepository(Type);

        const type = new Type();
        type.name = resource.name;
        type.faName = resource.faName;

        return typeRepository.save(type);
    }

    deleteById(id: string): Promise<any> {
        return Promise.resolve(undefined);
    }
}

export default new TypeService();