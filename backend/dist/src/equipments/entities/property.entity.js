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
exports.Property = void 0;
const typeorm_1 = require("typeorm");
const type_entity_1 = require("./type.entity");
let Property = class Property {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Property.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => type_entity_1.Type, (type) => type.id, { eager: true }),
    __metadata("design:type", type_entity_1.Type)
], Property.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Property.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Property.prototype, "faName", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Property.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Property.prototype, "updatedDate", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Property.prototype, "deletedDate", void 0);
Property = __decorate([
    (0, typeorm_1.Entity)()
], Property);
exports.Property = Property;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHkuZW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VxdWlwbWVudHMvZW50aXRpZXMvcHJvcGVydHkuZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFDQVFpQjtBQUVqQiwrQ0FBbUM7QUFHbkMsSUFBYSxRQUFRLEdBQXJCLE1BQWEsUUFBUTtDQXFCcEIsQ0FBQTtBQW5CRztJQURDLElBQUEsZ0NBQXNCLEdBQUU7O29DQUNkO0FBR1g7SUFEQyxJQUFBLG1CQUFTLEVBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLGtCQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7OEJBQ3hELGtCQUFJO3NDQUFDO0FBR1g7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O3NDQUNJO0FBR2I7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O3dDQUNNO0FBR2Y7SUFEQyxJQUFBLDBCQUFnQixHQUFFOzhCQUNOLElBQUk7NkNBQUE7QUFHakI7SUFEQyxJQUFBLDBCQUFnQixHQUFFOzhCQUNOLElBQUk7NkNBQUE7QUFHakI7SUFEQyxJQUFBLDBCQUFnQixHQUFFOzhCQUNOLElBQUk7NkNBQUE7QUFwQlIsUUFBUTtJQURwQixJQUFBLGdCQUFNLEdBQUU7R0FDSSxRQUFRLENBcUJwQjtBQXJCWSw0QkFBUSJ9