import { BaseServiceInterface } from "../../common/interfaces/base.service.interface";
import { AppDataSource } from "../../common/databases/data-source";
import { EquipmentInterface } from "../interfaces/equipment.interface";
import { Equipment } from "../entities/equipment.entity";

class EquipmentService implements BaseServiceInterface {
    async list(limit: number, page: number) {
        const equipmentRepository = AppDataSource.getRepository(Equipment);
        
        return equipmentRepository.find();
    }

    async create(resource: EquipmentInterface) {
        const equipment = new Equipment();
        equipment.type = resource.type;
        equipment.brand = resource.brand;
        equipment.model = resource.model;
        equipment.propertyNumber = resource.propertyNumber;
        equipment.supportNumber = resource.supportNumber;

        const equipmentRepository = AppDataSource.getRepository(Equipment);

        return equipmentRepository.save(equipment);
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

export default new EquipmentService();