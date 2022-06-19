"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../common/databases/data-source");
const user_entity_1 = require("../entities/user.entity");
const common_permissionflag_enum_1 = require("../../common/middleware/common.permissionflag.enum");
class UsersService {
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            // return UsersDao.addUser(resource);
            const user = new user_entity_1.User();
            user.firstName = resource.firstName;
            user.lastName = resource.lastName;
            user.email = resource.email;
            user.mobile = resource.mobile;
            user.password = resource.password;
            user.permissionFlags = common_permissionflag_enum_1.PermissionFlag.FREE_PERMISSION;
            const userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.User);
            return yield userRepository.save(user);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // return UsersDao.removeUserById(id);
        });
    }
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            // return UsersDao.getUsers(limit, page);
            const userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.User);
            return userRepository.find();
        });
    }
    // async patchById(id: string, resource: PatchUserDto) {
    //     return new Promise<string>();
    //     // return UsersDao.updateUserById(id, resource);
    // }
    //
    readById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // return UsersDao.getUserById(id);
            return data_source_1.AppDataSource.getRepository(user_entity_1.User).findOneBy({ id: Number(id) });
        });
    }
    //
    // async putById(id: string, resource: PutUserDto) {
    //     // return UsersDao.updateUserById(id, resource);
    // }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.User);
            return userRepository.findOneBy({
                email
            });
            // return UsersDao.getUserByEmail(email);
        });
    }
    getUserByEmailWithPassword(email) {
        return __awaiter(this, void 0, void 0, function* () {
            // return UsersDao.getUserByEmailWithPassword(email);
            const userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.User);
            return userRepository.findOneBy({
                email
            });
        });
    }
}
exports.default = new UsersService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy91c2Vycy9zZXJ2aWNlcy91c2Vycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUEsb0VBQW1FO0FBQ25FLHlEQUErQztBQUMvQyxtR0FBb0Y7QUFFcEYsTUFBTSxZQUFZO0lBQ1IsTUFBTSxDQUFDLFFBQWlCOztZQUMxQixxQ0FBcUM7WUFDckMsTUFBTSxJQUFJLEdBQUcsSUFBSSxrQkFBSSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUNsQyxJQUFJLENBQUMsZUFBZSxHQUFHLDJDQUFjLENBQUMsZUFBZSxDQUFDO1lBRXRELE1BQU0sY0FBYyxHQUFHLDJCQUFhLENBQUMsYUFBYSxDQUFDLGtCQUFJLENBQUMsQ0FBQztZQUV6RCxPQUFPLE1BQU0sY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsRUFBVTs7WUFDdkIsc0NBQXNDO1FBQzFDLENBQUM7S0FBQTtJQUVLLElBQUksQ0FBQyxLQUFhLEVBQUUsSUFBWTs7WUFDbEMseUNBQXlDO1lBQ3pDLE1BQU0sY0FBYyxHQUFHLDJCQUFhLENBQUMsYUFBYSxDQUFDLGtCQUFJLENBQUMsQ0FBQztZQUN6RCxPQUFPLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqQyxDQUFDO0tBQUE7SUFFRCx3REFBd0Q7SUFDeEQsb0NBQW9DO0lBQ3BDLHVEQUF1RDtJQUN2RCxJQUFJO0lBQ0osRUFBRTtJQUNJLFFBQVEsQ0FBQyxFQUFVOztZQUNyQixtQ0FBbUM7WUFDbkMsT0FBTywyQkFBYSxDQUFDLGFBQWEsQ0FBQyxrQkFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0UsQ0FBQztLQUFBO0lBQ0QsRUFBRTtJQUNGLG9EQUFvRDtJQUNwRCx1REFBdUQ7SUFDdkQsSUFBSTtJQUVFLGNBQWMsQ0FBQyxLQUFhOztZQUM5QixNQUFNLGNBQWMsR0FBRywyQkFBYSxDQUFDLGFBQWEsQ0FBQyxrQkFBSSxDQUFDLENBQUM7WUFDekQsT0FBTyxjQUFjLENBQUMsU0FBUyxDQUFDO2dCQUM1QixLQUFLO2FBQ1IsQ0FBQyxDQUFDO1lBQ0gseUNBQXlDO1FBQzdDLENBQUM7S0FBQTtJQUVLLDBCQUEwQixDQUFDLEtBQWE7O1lBQzFDLHFEQUFxRDtZQUNyRCxNQUFNLGNBQWMsR0FBRywyQkFBYSxDQUFDLGFBQWEsQ0FBQyxrQkFBSSxDQUFDLENBQUM7WUFDekQsT0FBTyxjQUFjLENBQUMsU0FBUyxDQUFDO2dCQUM1QixLQUFLO2FBQ1IsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLFlBQVksRUFBRSxDQUFDIn0=