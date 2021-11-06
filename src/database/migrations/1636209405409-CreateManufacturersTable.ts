import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateManufacturersTable1636209405409
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "manufacturers",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            generationStrategy: "increment",
            isGenerated: true,
          },
          {
            name: "nome",
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

    await queryRunner.query(`INSERT INTO manufacturers (nome) VALUES 
    ('Cleiton Pets Medical'), ('Alex Vaccination'), ('Darlan Bad Dogs' )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("manufacturers");
  }
}
