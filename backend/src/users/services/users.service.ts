import { BaseServiceInterface } from "../../common/interfaces/base.service.interface";
import { UserDto } from "../dto/user.dto";
import { AppDataSource } from "../../common/databases/data-source";
import { User } from "../entities/user.entity";
import { PermissionFlag } from "../../common/middleware/common.permissionflag.enum";

class UsersService implements BaseServiceInterface {
    async create(resource: UserDto) {
        // return UsersDao.addUser(resource);
        const user = new User();
        user.firstName = resource.firstName;
        user.lastName = resource.lastName;
        user.email = resource.email;
        user.mobile = resource.mobile;
        user.password = resource.password;
        user.permissionFlags = PermissionFlag.FREE_PERMISSION;

        const userRepository = AppDataSource.getRepository(User);

        return await userRepository.save(user);
    }

    async deleteById(id: string) {
        // return UsersDao.removeUserById(id);
    }

    async list(limit: number, page: number) {
        // return UsersDao.getUsers(limit, page);
        const userRepository = AppDataSource.getRepository(User);
        return userRepository.find();
    }

    // async patchById(id: string, resource: PatchUserDto) {
    //     return new Promise<string>();
    //     // return UsersDao.updateUserById(id, resource);
    // }
    //
    async readById(id: string) {
        // return UsersDao.getUserById(id);
        return AppDataSource.getRepository(User).findOneBy({ id: Number(id) });
    }
    //
    // async putById(id: string, resource: PutUserDto) {
    //     // return UsersDao.updateUserById(id, resource);
    // }

    async getUserByEmail(email: string) {
        const userRepository = AppDataSource.getRepository(User);
        return userRepository.findOneBy({
            email
        });
        // return UsersDao.getUserByEmail(email);
    }

    async getUserByEmailWithPassword(email: string) {
        // return UsersDao.getUserByEmailWithPassword(email);
        const userRepository = AppDataSource.getRepository(User);
        return userRepository.findOneBy({
            email
        });
    }
}

export default new UsersService();