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
const property_entity_1 = require("../entities/property.entity");
class PropertyService {
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            const propertyRepository = data_source_1.AppDataSource.getRepository(property_entity_1.Property);
            return propertyRepository.find();
        });
    }
    listByTypeId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const propertyRepository = data_source_1.AppDataSource.getRepository(property_entity_1.Property);
            return propertyRepository.find({
                relations: {
                    type: true,
                },
                where: {
                    type: {
                        id: Number(id)
                    }
                }
            });
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const propertyRepository = data_source_1.AppDataSource.getRepository(property_entity_1.Property);
            const property = new property_entity_1.Property();
            property.type = resource.type;
            property.name = resource.name;
            property.faName = resource.faName;
            return propertyRepository.save(property);
        });
    }
    deleteById(id) {
        return Promise.resolve(undefined);
    }
}
exports.default = new PropertyService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lcXVpcG1lbnRzL3NlcnZpY2VzL3Byb3BlcnR5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxvRUFBbUU7QUFDbkUsaUVBQXVEO0FBS3ZELE1BQU0sZUFBZTtJQUNYLElBQUksQ0FBQyxLQUFhLEVBQUUsSUFBWTs7WUFDbEMsTUFBTSxrQkFBa0IsR0FBRywyQkFBYSxDQUFDLGFBQWEsQ0FBQywwQkFBUSxDQUFDLENBQUM7WUFDakUsT0FBTyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQyxDQUFDO0tBQUE7SUFFSyxZQUFZLENBQUMsRUFBVTs7WUFDekIsTUFBTSxrQkFBa0IsR0FBRywyQkFBYSxDQUFDLGFBQWEsQ0FBQywwQkFBUSxDQUFDLENBQUM7WUFDakUsT0FBTyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZCLFNBQVMsRUFBRTtvQkFDUCxJQUFJLEVBQUUsSUFBSTtpQkFDYjtnQkFDRCxLQUFLLEVBQUU7b0JBQ0gsSUFBSSxFQUFFO3dCQUNGLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDO3FCQUNqQjtpQkFDSjthQUNKLENBQ0osQ0FBQztRQUNOLENBQUM7S0FBQTtJQUVLLE1BQU0sQ0FBQyxRQUEyQjs7WUFDcEMsTUFBTSxrQkFBa0IsR0FBRywyQkFBYSxDQUFDLGFBQWEsQ0FBQywwQkFBUSxDQUFDLENBQUM7WUFFakUsTUFBTSxRQUFRLEdBQUcsSUFBSSwwQkFBUSxFQUFFLENBQUM7WUFDaEMsUUFBUSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQzlCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztZQUM5QixRQUFRLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFFbEMsT0FBTyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsQ0FBQztLQUFBO0lBRUQsVUFBVSxDQUFDLEVBQVU7UUFDakIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FpQko7QUFFRCxrQkFBZSxJQUFJLGVBQWUsRUFBRSxDQUFDIn0=