"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../users/entities/user.entity");
const equipment_entity_1 = require("../../equipments/entities/equipment.entity");
const property_entity_1 = require("../../equipments/entities/property.entity");
const property_value_entity_1 = require("../../equipments/entities/property_value.entity");
const brand_entity_1 = require("../../equipments/entities/brand.entity");
const type_entity_1 = require("../../equipments/entities/type.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 33062,
    username: "root",
    password: "root",
    database: "ar-bpms",
    synchronize: true,
    logging: true,
    entities: [user_entity_1.User, equipment_entity_1.Equipment, property_entity_1.Property, property_value_entity_1.PropertyValue, brand_entity_1.Brand, type_entity_1.Type],
    subscribers: [],
    migrations: [],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tbW9uL2RhdGFiYXNlcy9kYXRhLXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw0QkFBeUI7QUFDekIscUNBQW9DO0FBQ3BDLGtFQUF3RDtBQUN4RCxpRkFBdUU7QUFDdkUsK0VBQXFFO0FBQ3JFLDJGQUFnRjtBQUNoRix5RUFBK0Q7QUFDL0QsdUVBQTZEO0FBRWhELFFBQUEsYUFBYSxHQUFHLElBQUksb0JBQVUsQ0FBQztJQUMxQyxJQUFJLEVBQUUsT0FBTztJQUNiLElBQUksRUFBRSxXQUFXO0lBQ2pCLElBQUksRUFBRSxLQUFLO0lBQ1gsUUFBUSxFQUFFLE1BQU07SUFDaEIsUUFBUSxFQUFFLE1BQU07SUFDaEIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsV0FBVyxFQUFFLElBQUk7SUFDakIsT0FBTyxFQUFFLElBQUk7SUFDYixRQUFRLEVBQUUsQ0FBQyxrQkFBSSxFQUFFLDRCQUFTLEVBQUUsMEJBQVEsRUFBRSxxQ0FBYSxFQUFFLG9CQUFLLEVBQUUsa0JBQUksQ0FBQztJQUNqRSxXQUFXLEVBQUUsRUFBRTtJQUNmLFVBQVUsRUFBRSxFQUFFO0NBQ2YsQ0FBQyxDQUFBIn0=