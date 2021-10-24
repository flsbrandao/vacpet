import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  AfterUpdate,
  BaseEntity,
} from "typeorm";

@Entity("species")
export default class SpeciesModel extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  public id: number;

  @Column()
  public nome: string;

  @Column("date")
  public created_at: Date;

  @Column("date")
  @AfterUpdate()
  public updated_at: Date;

  static withID(id: number) : SpeciesModel{
    const speciesModel = new SpeciesModel();
    speciesModel.id = id;
    return speciesModel;
  }
}
