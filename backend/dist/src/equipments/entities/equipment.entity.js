"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipment = void 0;
const typeorm_1 = require("typeorm");
const brand_entity_1 = require("./brand.entity");
const type_entity_1 = require("./type.entity");
let Equipment = class Equipment {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Equipment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => type_entity_1.Type, (type) => type.id, { eager: true }),
    __metadata("design:type", type_entity_1.Type)
], Equipment.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => brand_entity_1.Brand, (brand) => brand.id, { eager: true }),
    __metadata("design:type", brand_entity_1.Brand)
], Equipment.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Equipment.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Equipment.prototype, "propertyNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Equipment.prototype, "supportNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { nullable: true }),
    __metadata("design:type", String)
], Equipment.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Equipment.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Equipment.prototype, "updatedDate", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Equipment.prototype, "deletedDate", void 0);
Equipment = __decorate([
    (0, typeorm_1.Entity)()
], Equipment);
exports.Equipment = Equipment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1aXBtZW50LmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lcXVpcG1lbnRzL2VudGl0aWVzL2VxdWlwbWVudC5lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUNBQWtJO0FBRWxJLGlEQUF1QztBQUN2QywrQ0FBcUM7QUFHckMsSUFBYSxTQUFTLEdBQXRCLE1BQWEsU0FBUztDQThCckIsQ0FBQTtBQTVCRztJQURDLElBQUEsZ0NBQXNCLEdBQUU7O3FDQUNkO0FBR1g7SUFEQyxJQUFBLG1CQUFTLEVBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLGtCQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7OEJBQ3hELGtCQUFJO3VDQUFDO0FBR1g7SUFEQyxJQUFBLG1CQUFTLEVBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLG9CQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7OEJBQzFELG9CQUFLO3dDQUFDO0FBR2I7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O3dDQUNLO0FBR2Q7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O2lEQUNjO0FBR3ZCO0lBREMsSUFBQSxnQkFBTSxHQUFFOztnREFDYTtBQUd0QjtJQURDLElBQUEsZ0JBQU0sRUFBQyxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7OzhDQUNmO0FBR3BCO0lBREMsSUFBQSwwQkFBZ0IsR0FBRTs4QkFDTixJQUFJOzhDQUFBO0FBR2pCO0lBREMsSUFBQSwwQkFBZ0IsR0FBRTs4QkFDTixJQUFJOzhDQUFBO0FBR2pCO0lBREMsSUFBQSwwQkFBZ0IsR0FBRTs4QkFDTixJQUFJOzhDQUFBO0FBN0JSLFNBQVM7SUFEckIsSUFBQSxnQkFBTSxHQUFFO0dBQ0ksU0FBUyxDQThCckI7QUE5QlksOEJBQVMifQ==