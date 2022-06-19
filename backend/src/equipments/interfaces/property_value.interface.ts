import { Property } from "../entities/property.entity";

export interface PropertyValueInterface {
    id: number;
    property: Property
    name: string;
    faName: string;
}