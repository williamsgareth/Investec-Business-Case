import {Entity, PrimaryColumn, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Limits {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "int", length: 8})
    Entity_Id: number

    @Column({ type: "varchar", length: 100})    
    RiskTaker_Group_Name: string

    @Column({ type: "varchar", length: 100, default: "" })
    Risk_Taker_Name: string

    @Column({ type: "int", length: 8, default: 0 })
    Facility_Id: number

    @Column({ type: "char", length: 1, default: ""})
    Facility_Type: string

    @Column({ type: "int", length: 50, default: 0 })
    Limit_Id: number

    @Column({ type: "varchar", default: "" })
    Limit_Type: string

    @Column({ type: "varchar", length: 100, default: "" })
    Product: string

    @Column({ type: "varchar", length: 50, default: "" })
    Risk_Type: string

    @Column({ type: "varchar", length: 5, default: "" })
    Currency: string

    @Column({ type: "float" })
    Exposure_Amount: number

    @Column({ type: "decimal" })
    Total_Current_Limit: number

    @Column({ type: "decimal" })
    Total_Approved_Limit: number
}