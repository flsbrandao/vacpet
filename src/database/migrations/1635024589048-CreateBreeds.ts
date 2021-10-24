import { query } from "express";
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateBreeds1635024589048 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "breeds",
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
            name: "specieId",
            type: "int",
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

    await queryRunner.createForeignKey(
      "breeds",
      new TableForeignKey({
        columnNames: ["specieId"],
        referencedTableName: "species",
        referencedColumnNames: ["id"],
      })
    );

    await queryRunner.query(`INSERT INTO breeds (nome, specieId) VALUES
    ('SRD', 1), ('Husky Siberiano', 1), ('Pastor Alemão', 1),
    ('SRD', 2), ('Siamês',2), ('Persa',2),
    ('Cavalo Árabe', 3), ('Frísio', 3), ('Puro-sangue inglês', 3),
    ('Coelho Leão',4), ('Belier',4), ('Coelho Toy',4)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("breeds");
  }
}
