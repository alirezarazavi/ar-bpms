import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToOne
} from "typeorm";
import { PropertyValueInterface } from "../interfaces/property_value.interface";
import { Property } from "./property.entity";

@Entity()
export class PropertyValue implements PropertyValueInterface {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Property, (property) => property.id, { eager: true })
    property: Property;

    @Column()
    name: string;

    @Column()
    faName: string;

    @CreateDateColumn()
    createdDate: Date

    @UpdateDateColumn()
    updatedDate: Date

    @DeleteDateColumn()
    deletedDate: Date
}