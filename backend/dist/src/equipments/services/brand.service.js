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
const brand_entity_1 = require("../entities/brand.entity");
class BrandService {
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            const brandRepository = data_source_1.AppDataSource.getRepository(brand_entity_1.Brand);
            return brandRepository.find();
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const equipmentRepository = data_source_1.AppDataSource.getRepository(brand_entity_1.Brand);
            const brand = new brand_entity_1.Brand();
            brand.name = resource.name;
            brand.faName = resource.faName;
            return equipmentRepository.save(brand);
        });
    }
    deleteById(id) {
        return Promise.resolve(undefined);
    }
}
exports.default = new BrandService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhbmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lcXVpcG1lbnRzL3NlcnZpY2VzL2JyYW5kLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxvRUFBbUU7QUFDbkUsMkRBQWlEO0FBR2pELE1BQU0sWUFBWTtJQUNSLElBQUksQ0FBQyxLQUFhLEVBQUUsSUFBWTs7WUFDbEMsTUFBTSxlQUFlLEdBQUcsMkJBQWEsQ0FBQyxhQUFhLENBQUMsb0JBQUssQ0FBQyxDQUFDO1lBQzNELE9BQU8sZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xDLENBQUM7S0FBQTtJQUVLLE1BQU0sQ0FBQyxRQUF3Qjs7WUFDakMsTUFBTSxtQkFBbUIsR0FBRywyQkFBYSxDQUFDLGFBQWEsQ0FBQyxvQkFBSyxDQUFDLENBQUM7WUFFL0QsTUFBTSxLQUFLLEdBQUcsSUFBSSxvQkFBSyxFQUFFLENBQUM7WUFDMUIsS0FBSyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQzNCLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUUvQixPQUFPLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxDQUFDO0tBQUE7SUFFRCxVQUFVLENBQUMsRUFBVTtRQUNqQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQWlCSjtBQUVELGtCQUFlLElBQUksWUFBWSxFQUFFLENBQUMifQ==