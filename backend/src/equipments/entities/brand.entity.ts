import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";
import { BrandInterface } from "../interfaces/brand.interface";

@Entity()
export class Brand implements BrandInterface {
    @PrimaryGeneratedColumn()
    id: number;

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