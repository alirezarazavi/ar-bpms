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
exports.Type = void 0;
const typeorm_1 = require("typeorm");
let Type = class Type {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Type.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Type.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Type.prototype, "faName", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Type.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Type.prototype, "updatedDate", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Type.prototype, "deletedDate", void 0);
Type = __decorate([
    (0, typeorm_1.Entity)()
], Type);
exports.Type = Type;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5lbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZXF1aXBtZW50cy9lbnRpdGllcy90eXBlLmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBdUg7QUFJdkgsSUFBYSxJQUFJLEdBQWpCLE1BQWEsSUFBSTtDQWtCaEIsQ0FBQTtBQWhCRztJQURDLElBQUEsZ0NBQXNCLEdBQUU7O2dDQUNkO0FBR1g7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O2tDQUNJO0FBR2I7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O29DQUNNO0FBR2Y7SUFEQyxJQUFBLDBCQUFnQixHQUFFOzhCQUNOLElBQUk7eUNBQUE7QUFHakI7SUFEQyxJQUFBLDBCQUFnQixHQUFFOzhCQUNOLElBQUk7eUNBQUE7QUFHakI7SUFEQyxJQUFBLDBCQUFnQixHQUFFOzhCQUNOLElBQUk7eUNBQUE7QUFqQlIsSUFBSTtJQURoQixJQUFBLGdCQUFNLEdBQUU7R0FDSSxJQUFJLENBa0JoQjtBQWxCWSxvQkFBSSJ9