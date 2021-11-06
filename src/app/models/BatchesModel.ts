import { AfterUpdate, BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import ManufacturersModel from "./ManufacturersModel";
import VaccinesModel from "./VaccinesModel";

@Entity("batches")
export default class BatchesModel extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column()
    public codigo_lote: string;

    @ManyToOne(() => VaccinesModel, (vaccine) => vaccine.id)
    public vaccine : VaccinesModel;

    @OneToOne(() => ManufacturersModel)
    @JoinColumn()
    public manufacture : ManufacturersModel;

    @Column()
    public data_fabricacao: Date;

    @Column()
    public data_vencimento: Date;

    @Column()
    public quantidade: number;

    @Column("date")
    public created_at: Date;
  
    @Column("date")
    @AfterUpdate()
    public updated_at: Date;

}