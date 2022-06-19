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
const equipment_entity_1 = require("../entities/equipment.entity");
class EquipmentService {
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            const equipmentRepository = data_source_1.AppDataSource.getRepository(equipment_entity_1.Equipment);
            return equipmentRepository.find();
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const equipment = new equipment_entity_1.Equipment();
            equipment.type = resource.type;
            equipment.brand = resource.brand;
            equipment.model = resource.model;
            equipment.propertyNumber = resource.propertyNumber;
            equipment.supportNumber = resource.supportNumber;
            const equipmentRepository = data_source_1.AppDataSource.getRepository(equipment_entity_1.Equipment);
            return equipmentRepository.save(equipment);
        });
    }
    deleteById(id) {
        return Promise.resolve(undefined);
    }
}
exports.default = new EquipmentService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1aXBtZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZXF1aXBtZW50cy9zZXJ2aWNlcy9lcXVpcG1lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLG9FQUFtRTtBQUVuRSxtRUFBeUQ7QUFFekQsTUFBTSxnQkFBZ0I7SUFDWixJQUFJLENBQUMsS0FBYSxFQUFFLElBQVk7O1lBQ2xDLE1BQU0sbUJBQW1CLEdBQUcsMkJBQWEsQ0FBQyxhQUFhLENBQUMsNEJBQVMsQ0FBQyxDQUFDO1lBQ25FLE9BQU8sbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEMsQ0FBQztLQUFBO0lBRUssTUFBTSxDQUFDLFFBQTRCOztZQUNyQyxNQUFNLFNBQVMsR0FBRyxJQUFJLDRCQUFTLEVBQUUsQ0FBQztZQUNsQyxTQUFTLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDL0IsU0FBUyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNqQyxTQUFTLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUM7WUFDbkQsU0FBUyxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDO1lBRWpELE1BQU0sbUJBQW1CLEdBQUcsMkJBQWEsQ0FBQyxhQUFhLENBQUMsNEJBQVMsQ0FBQyxDQUFDO1lBRW5FLE9BQU8sbUJBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLENBQUM7S0FBQTtJQUVELFVBQVUsQ0FBQyxFQUFVO1FBQ2pCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBaUJKO0FBRUQsa0JBQWUsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDIn0=