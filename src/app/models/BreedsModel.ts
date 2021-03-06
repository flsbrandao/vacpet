import {
  AfterUpdate,
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import SpeciesModel from "./SpeciesModel";

@Entity("breeds")
export default class BreedsModel extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  public id: number;

  @Column()
  public nome: string;

  @Column()
  public specieId: number;

  @OneToOne(() => SpeciesModel)
  @JoinColumn()
  public specie: SpeciesModel;

  @Column("date")
  public created_at: Date;

  @Column("date")
  @AfterUpdate()
  public updated_at: Date;

  static withID(id: number): BreedsModel {
    const breedsModel = new BreedsModel();
    breedsModel.id = id;
    return breedsModel;
  }
}
