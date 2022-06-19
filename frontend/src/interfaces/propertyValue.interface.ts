import PropertyInterface from "./property.interface";

export default interface PropertyValueInterface {
    id?: number | null;
    property: PropertyInterface;
    name: string;
}