import {
  AfterUpdate,
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import PetsModel from "./PetsModel";

export enum PorteType {
  P = "P",
  M = "M",
  G = "G",
}

@Entity("medicalrecord")
export default class MedicalRecordModel extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @OneToOne(() => PetsModel)
  @JoinColumn()
  public pet: PetsModel;

  @Column()
  public alergia: string;

  @Column()
  public doenca: string;

  @Column()
  public peso: number;

  @Column()
  public medicamentos: string;

  @Column()
  public pelagem: string;

  @Column({
    type: "enum",
    enum: PorteType,
  })
  public porte: PorteType;

  @Column()
  public parasitario_interno: string;

  @Column()
  public parasitario_externo: string;

  @Column("date")
  public created_at: Date;

  @Column("date")
  @AfterUpdate()
  public updated_at: Date;
}
