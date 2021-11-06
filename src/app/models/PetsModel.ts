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
import BreedsModel from "./BreedsModel";
import SpeciesModel from "./SpeciesModel";
import UsersModel from "./UsersModel";
import VaccinationModel from "./VaccinationModel";

export enum SexoType {
  M = "M",
  F = "F",
}

@Entity("pets")
export default class PetsModel extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @ManyToOne(() => UsersModel, (user) => user.pet)
  public user: UsersModel;

  @OneToMany(() => VaccinationModel, (vaccination) => vaccination.pet)
  public vaccination: VaccinationModel[];

  @Column()
  public foto?: string;

  @Column()
  public nome: string;

  @OneToOne(() => SpeciesModel)
  @JoinColumn()
  public specie: SpeciesModel;

  @Column({
    type: "enum",
    enum: SexoType,
  })
  public sexo: SexoType;

  @OneToOne(() => BreedsModel)
  @JoinColumn()
  public breed: BreedsModel;

  @Column({ type: "date" })
  public data_nascimento: Date;

  @Column("date")
  public created_at: Date;

  @Column("date")
  @AfterUpdate()
  public updated_at: Date;
}
