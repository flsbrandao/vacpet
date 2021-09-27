import { Entity, PrimaryGeneratedColumn, Column, AfterUpdate } from 'typeorm';

@Entity('users')
class UserModel {
  @PrimaryGeneratedColumn('uuid')
  public id: number;

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

  @Column('date')
  public created_at: Date;

  @Column('date')
  @AfterUpdate()
  public updated_at: Date;

}

export default UserModel;