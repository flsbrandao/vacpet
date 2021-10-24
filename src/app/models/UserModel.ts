import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  AfterUpdate,
  BaseEntity,
  OneToMany,
} from "typeorm";
import PetsModel from "./PetsModel";

@Entity("users")
export default class UserModel extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public nome: string;

  @Column()
  public cpf: string;

  @Column()
  public email: string;

  @Column()
  public endereco: string;

  @Column()
  public telefone: string;

  @Column()
  public celular: string;

  @Column("date")
  public created_at: Date;

  @Column("date")
  @AfterUpdate()
  public updated_at: Date;

  @OneToMany(()=> PetsModel, pets => pets.user)
  public pet : PetsModel[];

  static withID(id: string) : UserModel{
    const userModel = new UserModel();
    userModel.id = id;
    return userModel;
  }
}
