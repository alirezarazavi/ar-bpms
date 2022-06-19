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
const property_service_1 = __importDefault(require("../services/property.service"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:type-controller');
class PropertyController {
    listProperties(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const properties = yield property_service_1.default.list(100, 0);
            res.status(200).send(properties);
        });
    }
    listTypeProperties(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const properties = yield property_service_1.default.listByTypeId(req.params.typeId);
            res.status(200).send(properties);
        });
    }
    createProperty(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const property = yield property_service_1.default.create(req.body);
            res.status(201).send({ property });
        });
    }
}
exports.default = new PropertyController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHkuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lcXVpcG1lbnRzL2NvbnR0cm9sbGVycy9wcm9wZXJ0eS5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esb0ZBQTJEO0FBQzNELGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMscUJBQXFCLENBQUMsQ0FBQztBQUUxRCxNQUFNLGtCQUFrQjtJQUNkLGNBQWMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUM1RCxNQUFNLFVBQVUsR0FBRyxNQUFNLDBCQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUV0RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxDQUFDO0tBQUE7SUFFSyxrQkFBa0IsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNoRSxNQUFNLFVBQVUsR0FBRyxNQUFNLDBCQUFlLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFekUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsQ0FBQztLQUFBO0lBRUssY0FBYyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzVELE1BQU0sUUFBUSxHQUFHLE1BQU0sMEJBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXhELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN2QyxDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksa0JBQWtCLEVBQUUsQ0FBQyJ9