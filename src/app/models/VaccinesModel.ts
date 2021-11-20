import {
  AfterUpdate,
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import BatchesModel from "./BatchesModel";
import SpeciesModel from "./SpeciesModel";

@Entity("vaccines")
export default class VaccinesModel extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  public id: number;

  @Column()
  public nome: string;

  @OneToOne(() => SpeciesModel)
  @JoinColumn()
  public specie: SpeciesModel;

  @Column()
  public doses_primarias: number;

  @Column()
  public intervalo_doses_primarias: number;

  @Column()
  public intervalo_revacinacao: number;

  @OneToMany(() => BatchesModel, (batche) => batche.vaccine)
  public batche: BatchesModel[];

  @Column("date")
  public created_at: Date;

  @Column("date")
  @AfterUpdate()
  public updated_at: Date;

  static withID(id: number) {
    const vaccinesModel = new VaccinesModel();
    vaccinesModel.id = id;
    return vaccinesModel;
  }
}
