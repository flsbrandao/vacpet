import { AfterUpdate, BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('clinics')
export default class ClinicsModel extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    public id: string;
  
    @Column()
    public nome: string;

    @Column()
    public cnpj: string;

    @Column()
    public endereco: string;

    @Column()
    public telefone: string;

    @Column("date")
    public created_at: Date;
  
    @Column("date")
    @AfterUpdate()
    public updated_at: Date;

    static withID(id: string): ClinicsModel {
        const clinicsModel = new ClinicsModel();
        clinicsModel.id = id;
        return clinicsModel;
    }

}