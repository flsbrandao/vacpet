import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    AfterUpdate,
    BaseEntity,
  } from "typeorm";
  
  @Entity("manufacturers")
  export default class ManufacturersModel extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    public id: number;
  
    @Column()
    public nome: string;
  
    @Column("date")
    public created_at: Date;
  
    @Column("date")
    @AfterUpdate()
    public updated_at: Date;
  
    static withID(id: number) : ManufacturersModel{
      const manufacturersModel = new ManufacturersModel();
      manufacturersModel.id = id;
      return manufacturersModel;
    }
  }
  