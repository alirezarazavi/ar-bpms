import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../../users/entities/user.entity";
import { Equipment } from "../../equipments/entities/equipment.entity";
import { Property } from "../../equipments/entities/property.entity";
import { PropertyValue } from "../../equipments/entities/property_value.entity";
import { Brand } from "../../equipments/entities/brand.entity";
import { Type } from "../../equipments/entities/type.entity";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "database",
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [User, Equipment, Property, PropertyValue, Brand, Type],
  subscribers: [],
  migrations: [],
})