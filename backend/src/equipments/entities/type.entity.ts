import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";
import { TypeInterface } from "../interfaces/type.interface";

@Entity()
export class Type implements TypeInterface {
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