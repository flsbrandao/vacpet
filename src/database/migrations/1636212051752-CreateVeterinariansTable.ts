import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateVeterinariansTable1636212051752
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "veterinarians",
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
            name: "crmv",
            type: "varchar",
            isUnique: true,
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

    await queryRunner.query(`INSERT INTO veterinarians (nome, crmv) VALUES 
    ('Carlindo de Abreu', '55898'), ('Alfredo Von Cardoso', '10135'), 
    ('Rinaldo Carvalho', '27143') `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("veterinarians");
  }
}
