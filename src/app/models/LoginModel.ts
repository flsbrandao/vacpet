import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum LoginType {
  V = "V",
  U = "U",
}
@Entity("login")
export default class LoginModel extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public userId: string;

  @Column()
  public email: string;

  @Column()
  public password: string;

  @Column({
    type: "enum",
    enum: LoginType,
  })
  public tipo: LoginType;
}
