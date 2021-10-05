import { Entity, PrimaryGeneratedColumn, Column, AfterUpdate } from 'typeorm';

@Entity('species')
class SpeciesModel{
  @PrimaryGeneratedColumn('increment')
  public id : number;

  @Column()
  public nome : string;

  @Column('date')
  public created_at: Date;

  @Column('date')
  @AfterUpdate()
  public updated_at: Date;
}

export default SpeciesModel;