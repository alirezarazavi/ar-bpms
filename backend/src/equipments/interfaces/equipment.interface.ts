import {Type} from "../entities/type.entity";
import {Brand} from "../entities/brand.entity";

export interface EquipmentInterface {
    id: number;
    type: Type;
    brand: Brand;
    model: string;
    propertyNumber: string;
    supportNumber: string;
}