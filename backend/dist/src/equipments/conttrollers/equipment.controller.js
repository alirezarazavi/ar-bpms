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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const equipment_service_1 = __importDefault(require("../services/equipment.service"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:equipment-controller');
class EquipmentController {
    listEquipment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const equipments = yield equipment_service_1.default.list(100, 0);
            res.status(200).send(equipments);
        });
    }
    createEquipment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const equipment = yield equipment_service_1.default.create(req.body);
            res.status(201).send({ equipment });
        });
    }
}
exports.default = new EquipmentController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1aXBtZW50LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZXF1aXBtZW50cy9jb250dHJvbGxlcnMvZXF1aXBtZW50LmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxzRkFBNkQ7QUFDN0Qsa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQywwQkFBMEIsQ0FBQyxDQUFDO0FBRS9ELE1BQU0sbUJBQW1CO0lBQ2YsYUFBYSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzNELE1BQU0sVUFBVSxHQUFHLE1BQU0sMkJBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxDQUFDO0tBQUE7SUFFSyxlQUFlLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDN0QsTUFBTSxTQUFTLEdBQUcsTUFBTSwyQkFBZ0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksbUJBQW1CLEVBQUUsQ0FBQyJ9