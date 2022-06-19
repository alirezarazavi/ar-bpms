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
const type_entity_1 = require("../entities/type.entity");
class TypeService {
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            const typeRepository = data_source_1.AppDataSource.getRepository(type_entity_1.Type);
            return typeRepository.find();
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const typeRepository = data_source_1.AppDataSource.getRepository(type_entity_1.Type);
            const type = new type_entity_1.Type();
            type.name = resource.name;
            type.faName = resource.faName;
            return typeRepository.save(type);
        });
    }
    deleteById(id) {
        return Promise.resolve(undefined);
    }
}
exports.default = new TypeService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VxdWlwbWVudHMvc2VydmljZXMvdHlwZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0Esb0VBQW1FO0FBQ25FLHlEQUErQztBQUcvQyxNQUFNLFdBQVc7SUFDUCxJQUFJLENBQUMsS0FBYSxFQUFFLElBQVk7O1lBQ2xDLE1BQU0sY0FBYyxHQUFHLDJCQUFhLENBQUMsYUFBYSxDQUFDLGtCQUFJLENBQUMsQ0FBQztZQUN6RCxPQUFPLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqQyxDQUFDO0tBQUE7SUFFSyxNQUFNLENBQUMsUUFBdUI7O1lBQ2hDLE1BQU0sY0FBYyxHQUFHLDJCQUFhLENBQUMsYUFBYSxDQUFDLGtCQUFJLENBQUMsQ0FBQztZQUV6RCxNQUFNLElBQUksR0FBRyxJQUFJLGtCQUFJLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBRTlCLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxDQUFDO0tBQUE7SUFFRCxVQUFVLENBQUMsRUFBVTtRQUNqQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNKO0FBRUQsa0JBQWUsSUFBSSxXQUFXLEVBQUUsQ0FBQyJ9