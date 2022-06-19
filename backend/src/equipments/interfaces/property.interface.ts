import { Type } from "../entities/type.entity";

export interface PropertyInterface {
    id: number;
    type: Type;
    name: string;
    faName: string;
}