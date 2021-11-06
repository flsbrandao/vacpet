import {
  AfterUpdate,
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import BatchesModel from "./BatchesModel";
import ClinicsModel from "./ClinicsModel";
import PetsModel from "./PetsModel";
import VeretinariansModel from "./VeterinariansModel";

@Entity("vaccination")
export default class VaccinationModel extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @ManyToOne(() => PetsModel, (pet) => pet.id)
  public pet: PetsModel;

  @ManyToOne(() => BatchesModel, (batche) => batche.id)
  public batche: BatchesModel;

  @OneToOne(() => VeretinariansModel)
  @JoinColumn()
  public veterinary: VeretinariansModel;

  @OneToOne(() => ClinicsModel)
  @JoinColumn()
  public clinic: ClinicsModel;

  @Column("date")
  public data_vacinacao: Date;

  @Column("date")
  public created_at: Date;

  @Column("date")
  @AfterUpdate()
  public updated_at: Date;
}
