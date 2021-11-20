import {
  AfterUpdate,
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import ManufacturersModel from "./ManufacturersModel";
import VaccinationModel from "./VaccinationModel";
import VaccinesModel from "./VaccinesModel";

@Entity("batches")
export default class BatchesModel extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public codigo_lote: string;

  @ManyToOne(() => VaccinesModel, (vaccine) => vaccine.id)
  public vaccine: VaccinesModel;

  @ManyToOne(() => ManufacturersModel, (manufacture) => manufacture.id)
  public manufacture: ManufacturersModel;

  @OneToMany(() => VaccinationModel, (vaccination) => vaccination.batche)
  public vaccination: VaccinationModel[];

  @Column("date")
  public data_fabricacao: Date;

  @Column("date")
  public data_vencimento: Date;

  @Column()
  public quantidade: number;

  @Column("date")
  public created_at: Date;

  @Column("date")
  @AfterUpdate()
  public updated_at: Date;

  static withID(id: string): BatchesModel {
    const batchesModel = new BatchesModel();
    batchesModel.id = id;
    return batchesModel;
  }
}
