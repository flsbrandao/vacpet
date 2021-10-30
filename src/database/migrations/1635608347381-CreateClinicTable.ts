import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClinicTable1635608347381 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "clinics",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "UUID()",
          },
          {
            name: "nome",
            type: "varchar",
          },
          {
            name: "cnpj",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "endereco",
            type: "varchar",
          },
          {
            name: "telefone",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );

    await queryRunner.query(`INSERT INTO clinics (nome, cnpj, endereco, telefone) VALUES
    ('Clinica do Gado', '34454761000135', 'Rua da Vaquejada, 129 - JD. Boiadeiro', '1143452344'),
    ('Clinica do Chupa Cabra', '66386327000151', 'Rua das Cabritas, 23 - JD. Cabra da Peste ', '1143204304')`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("clinics");
  }
}
