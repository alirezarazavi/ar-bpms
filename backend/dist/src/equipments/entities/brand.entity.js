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
exports.Brand = void 0;
const typeorm_1 = require("typeorm");
let Brand = class Brand {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Brand.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Brand.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Brand.prototype, "faName", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Brand.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Brand.prototype, "updatedDate", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Brand.prototype, "deletedDate", void 0);
Brand = __decorate([
    (0, typeorm_1.Entity)()
], Brand);
exports.Brand = Brand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhbmQuZW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VxdWlwbWVudHMvZW50aXRpZXMvYnJhbmQuZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFDQUF1SDtBQUl2SCxJQUFhLEtBQUssR0FBbEIsTUFBYSxLQUFLO0NBa0JqQixDQUFBO0FBaEJHO0lBREMsSUFBQSxnQ0FBc0IsR0FBRTs7aUNBQ2Q7QUFHWDtJQURDLElBQUEsZ0JBQU0sR0FBRTs7bUNBQ0k7QUFHYjtJQURDLElBQUEsZ0JBQU0sR0FBRTs7cUNBQ007QUFHZjtJQURDLElBQUEsMEJBQWdCLEdBQUU7OEJBQ04sSUFBSTswQ0FBQTtBQUdqQjtJQURDLElBQUEsMEJBQWdCLEdBQUU7OEJBQ04sSUFBSTswQ0FBQTtBQUdqQjtJQURDLElBQUEsMEJBQWdCLEdBQUU7OEJBQ04sSUFBSTswQ0FBQTtBQWpCUixLQUFLO0lBRGpCLElBQUEsZ0JBQU0sR0FBRTtHQUNJLEtBQUssQ0FrQmpCO0FBbEJZLHNCQUFLIn0=