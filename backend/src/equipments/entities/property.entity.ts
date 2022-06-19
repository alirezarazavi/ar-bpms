import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToOne
} from "typeorm";
import { PropertyInterface } from "../interfaces/property.interface";
import {Type} from "./type.entity";

@Entity()
export class Property implements PropertyInterface {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne((type) => Type, (type) => type.id, { eager: true })
    type: Type;

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