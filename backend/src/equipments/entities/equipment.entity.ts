import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from "typeorm";
import { EquipmentInterface } from "../interfaces/equipment.interface";
import { Brand } from "./brand.entity";
import { Type } from "./type.entity";

@Entity()
export class Equipment implements EquipmentInterface {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne((type) => Type, (type) => type.id, { eager: true })
    type: Type;

    @ManyToOne((type) => Brand, (brand) => brand.id, { eager: true })
    brand: Brand;

    @Column()
    model: string;

    @Column()
    propertyNumber: string;

    @Column()
    supportNumber: string;

    @Column("text", { nullable: true })
    description: string;

    @CreateDateColumn()
    createdDate: Date

    @UpdateDateColumn()
    updatedDate: Date

    @DeleteDateColumn()
    deletedDate: Date
}