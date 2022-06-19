import TypeInterface from "./type.interface";

export default interface PropertyInterface {
    id?: number | null;
    type: TypeInterface;
    name: string;
    faName: string;
}