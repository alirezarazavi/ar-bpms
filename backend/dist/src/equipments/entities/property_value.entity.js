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
exports.PropertyValue = void 0;
const typeorm_1 = require("typeorm");
const property_entity_1 = require("./property.entity");
let PropertyValue = class PropertyValue {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PropertyValue.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => property_entity_1.Property, (property) => property.id, { eager: true }),
    __metadata("design:type", property_entity_1.Property)
], PropertyValue.prototype, "property", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PropertyValue.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PropertyValue.prototype, "faName", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PropertyValue.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PropertyValue.prototype, "updatedDate", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], PropertyValue.prototype, "deletedDate", void 0);
PropertyValue = __decorate([
    (0, typeorm_1.Entity)()
], PropertyValue);
exports.PropertyValue = PropertyValue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHlfdmFsdWUuZW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VxdWlwbWVudHMvZW50aXRpZXMvcHJvcGVydHlfdmFsdWUuZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFDQVFpQjtBQUVqQix1REFBNkM7QUFHN0MsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtDQXFCekIsQ0FBQTtBQW5CRztJQURDLElBQUEsZ0NBQXNCLEdBQUU7O3lDQUNkO0FBR1g7SUFEQyxJQUFBLG1CQUFTLEVBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQywwQkFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDOzhCQUM5RCwwQkFBUTsrQ0FBQztBQUduQjtJQURDLElBQUEsZ0JBQU0sR0FBRTs7MkNBQ0k7QUFHYjtJQURDLElBQUEsZ0JBQU0sR0FBRTs7NkNBQ007QUFHZjtJQURDLElBQUEsMEJBQWdCLEdBQUU7OEJBQ04sSUFBSTtrREFBQTtBQUdqQjtJQURDLElBQUEsMEJBQWdCLEdBQUU7OEJBQ04sSUFBSTtrREFBQTtBQUdqQjtJQURDLElBQUEsMEJBQWdCLEdBQUU7OEJBQ04sSUFBSTtrREFBQTtBQXBCUixhQUFhO0lBRHpCLElBQUEsZ0JBQU0sR0FBRTtHQUNJLGFBQWEsQ0FxQnpCO0FBckJZLHNDQUFhIn0=