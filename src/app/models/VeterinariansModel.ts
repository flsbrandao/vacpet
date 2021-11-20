import {
  AfterUpdate,
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("veterinarians")
export default class VeretinariansModel extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public nome: string;

  @Column()
  public crmv: string;

  @Column("date")
  public created_at: Date;

  @Column("date")
  @AfterUpdate()
  public updated_at: Date;

  static withID(id: string): VeretinariansModel {
    const veretinariansModel = new VeretinariansModel();
    veretinariansModel.id = id;
    return veretinariansModel;
  }
}
